import { computed, ref, watch, onMounted } from 'vue'
import { bookService } from '@/services/books.service'
import type { Book, SortOption, SortOrder } from '@/types/book'

export function useBookSearch(itemsPerPage = 5) {
    const title = ref('')
    const author = ref('')
    const year = ref('')
    const subject = ref('')
    const genre = ref('')
    const sortBy = ref<SortOption>('relevance')
    const sortOrder = ref<SortOrder>('asc')
    const currentPage = ref(1)

    const subjects = ref<string[]>([])
    const genres = ref<string[]>([])
    const filteredBooks = ref<Book[]>([])
    const isLoading = ref(false)

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