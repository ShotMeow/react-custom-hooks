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

    const App: FC = () => {
        const {ref, isShow, setIsShow} = useOutside(false)
    
        return (
            <main className={styles.container}>
                <button onClick={() => setIsShow(true)} className={styles.auth}>Login</button>
                <div ref={ref} className={isShow ? styles.modal : styles.hidden}>
                    Inside of Modal...
                    <button onClick={() => setIsShow(!isShow)} className={styles.close}>
                        Close
                    </button>
                </div>
            </main>
        );
    };
    
    export default App;
