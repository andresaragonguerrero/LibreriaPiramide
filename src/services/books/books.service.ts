import type { OpenLibraryResponse } from '@/types/book'

const BASE_URL = 'https://openlibrary.org/search.json'

export const searchBooks = async (
  query: string,
  limit = 10,
): Promise<OpenLibraryResponse> => {
  const response = await fetch(
    `${BASE_URL}?q=${encodeURIComponent(query)}&limit=${limit}`,
  )

  if (!response.ok) {
    throw new Error(`Open Library API error: ${response.status}`)
  }

  return response.json()
}