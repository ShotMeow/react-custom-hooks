export const useScroll = () => {
    const scrollRef = useRef<HTMLElement>(null)

    const { x, y } = scrollRef

    return { x, y }
}