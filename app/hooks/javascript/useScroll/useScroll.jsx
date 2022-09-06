export const useScroll = () => {
    const scrollRef = useRef(null)

    const { x, y } = scrollRef

    return { x, y }
}