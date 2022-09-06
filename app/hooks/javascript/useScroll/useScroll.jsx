export const useScroll = () => {
    const ref = useRef(null)

    const { x, y } = ref

    return { ref, x, y }
}