import { computed, ref, watch } from 'vue'
import { getGenres, getSubjects, searchBooks } from '@/services/books/books.service'
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

    const subjects = getSubjects()
    const genres = getGenres()

    const allFilteredBooks = computed<Book[]>(() =>
        searchBooks({
            title: title.value,
            author: author.value,
            year: year.value ? Number(year.value) : undefined,
            subject: subject.value,
            genre: genre.value,
            sortBy: sortBy.value,
            sortOrder: sortOrder.value,
        })
    )

    const paginatedBooks = computed<Book[]>(() => {
        const start = (currentPage.value - 1) * itemsPerPage
        return allFilteredBooks.value.slice(start, start + itemsPerPage)
    })

    const totalBooks = computed(() => allFilteredBooks.value.length)
    const totalPages = computed(() => Math.ceil(totalBooks.value / itemsPerPage))
    const totalBooksText = computed(() =>
        `${totalBooks.value} ${totalBooks.value === 1 ? 'libro encontrado' : 'libros encontrados'}`
    )

    watch([title, author, year, subject, genre, sortBy, sortOrder], () => {
        currentPage.value = 1
    })

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

    const prevPage = () => {
        if (currentPage.value > 1) currentPage.value--
    }

    const nextPage = () => {
        if (currentPage.value < totalPages.value) currentPage.value++
    }

    return {
        // Estado
        title,
        author,
        year,
        subject,
        genre,
        sortBy,
        sortOrder,
        currentPage,
        // Listas fijas
        subjects,
        genres,
        // Calculados
        paginatedBooks,
        totalBooks,
        totalPages,
        totalBooksText,
        // Acciones
        resetFilters,
        prevPage,
        nextPage,
    }
}