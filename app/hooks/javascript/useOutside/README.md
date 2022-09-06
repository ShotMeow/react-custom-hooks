<h1 align="center">useOutside</h1>

<h2>Variables</h2>

`ref: any`
`isShow: boolean`
`setIsShow: Dispatch<SetStateAction<boolean>>`

<h2>Usage</h2>

**ref** is the element you want to show. If the interaction is not with this element, **setIsShow** will be set to **false**.

**isShow** is the **boolean** value containing the display state of the **ref** element.

**setIsShow()** is state change function.

<h2>Example</h2>

    const App = () => {
        const {ref, isShow, setIsShow} = useOutside(false)
    
        return (
            <main className={styles.container}>
                <div ref={ref} className={styles.modal}>
                    Inside of Modal...
                </div>
                <button onClick={() => setIsShow(!isShow)} className={styles.close}>
                    Close
                </button>
            </main>
        );
    };