import { ref, onMounted, onUnmounted } from 'vue'

export function useHeaderScroll() {
    const isCollapsed = ref(false)

    function handleScroll() {
        isCollapsed.value = window.scrollY > window.innerHeight / 2
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })

    return { isCollapsed }
}