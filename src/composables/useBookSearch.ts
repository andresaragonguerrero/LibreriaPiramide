import { computed, ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { bookService } from '@/services/books.service'
import type { Book, SortOption, SortOrder } from '@/types/book'

export function useBookSearch(itemsPerPage = 5) {
    const route = useRoute()
    const router = useRouter()

    const title = ref((route.query.title as string) || '')
    const author = ref((route.query.author as string) || '')
    const year = ref((route.query.year as string) || '')
    const subject = ref((route.query.subject as string) || '')
    const genre = ref((route.query.genre as string) || '')
    const sortBy = ref<SortOption>((route.query.sortBy as SortOption) || 'relevance')
    const sortOrder = ref<SortOrder>((route.query.sortOrder as SortOrder) || 'asc')
    const currentPage = ref(Number(route.query.page) || 1)

    const subjects = ref<string[]>([])
    const genres = ref<string[]>([])
    const filteredBooks = ref<Book[]>([])
    const isLoading = ref(false)

    const syncQueryParams = () => {
        const query: Record<string, string | number | undefined> = {}

        if (title.value) query.title = title.value
        if (author.value) query.author = author.value
        if (year.value) query.year = year.value
        if (subject.value) query.subject = subject.value
        if (genre.value) query.genre = genre.value
        if (sortBy.value !== 'relevance') query.sortBy = sortBy.value
        if (sortOrder.value !== 'asc') query.sortOrder = sortOrder.value
        if (currentPage.value > 1) query.page = currentPage.value

        router.replace({ query })
    }

    const fetchFiltersData = async () => {
        subjects.value = await bookService.getSubjects()
        genres.value = await bookService.getGenres()
    }

    const executeSearch = async () => {
        isLoading.value = true
        try {
            filteredBooks.value = await bookService.searchBooks({
                title: title.value,
                author: author.value,
                year: year.value ? Number(year.value) : undefined,
                subject: subject.value,
                genre: genre.value,
                sortBy: sortBy.value,
                sortOrder: sortOrder.value,
            })
        } finally {
            isLoading.value = false
        }
    }

    onMounted(() => {
        fetchFiltersData()
        executeSearch()
    })

    watch([title, author, year, subject, genre, sortBy, sortOrder], () => {
        currentPage.value = 1
        executeSearch()
        syncQueryParams()
    })

    watch(currentPage, () => {
        syncQueryParams()
    })

    const paginatedBooks = computed<Book[]>(() => {
        const start = (currentPage.value - 1) * itemsPerPage
        return filteredBooks.value.slice(start, start + itemsPerPage)
    })

    const totalBooks = computed(() => filteredBooks.value.length)
    const totalPages = computed(() => Math.ceil(totalBooks.value / itemsPerPage))
    const totalBooksText = computed(() =>
        `${totalBooks.value} ${totalBooks.value === 1 ? 'libro encontrado' : 'libros encontrados'}`
    )

    const resetFilters = () => {
        title.value = ''
        author.value = ''
        year.value = ''
        subject.value = ''
        genre.value = ''
        sortBy.value = 'relevance'
        sortOrder.value = 'asc'
        currentPage.value = 1
    }

    return {
        title,
        author,
        year,
        subject,
        genre,
        sortBy,
        sortOrder,
        currentPage,
        subjects,
        genres,
        paginatedBooks,
        totalBooks,
        totalPages,
        totalBooksText,
        isLoading,
        resetFilters,
        prevPage: () => { if (currentPage.value > 1) currentPage.value-- },
        nextPage: () => { if (currentPage.value < totalPages.value) currentPage.value++ }
    }
}