import { ref } from 'vue'
import type { Ref } from 'vue'

interface AsyncState<T, Args extends unknown[] = []> {
    data: Ref<T | null>
    isLoading: Ref<boolean>
    error: Ref<string | null>
    execute: (...args: Args) => Promise<void>
}

export function useAsyncState<T, Args extends unknown[] = []>(
    fn: (...args: Args) => Promise<T>
): AsyncState<T, Args> {
    const data = ref<T | null>(null) as Ref<T | null>
    const isLoading = ref(false)
    const error = ref<string | null>(null)

    const execute = async (...args: Args) => {
        isLoading.value = true
        error.value = null

        try {
            data.value = await fn(...args)
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Ha ocurrido un error inesperado'
        } finally {
            isLoading.value = false
        }
    }

    return { data, isLoading, error, execute }
}