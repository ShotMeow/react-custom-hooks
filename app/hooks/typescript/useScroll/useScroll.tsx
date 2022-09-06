export const useScroll = () => {
    const ref = useRef<HTMLElement>(null)

    const { x, y } = ref

    return { ref, x, y }
}