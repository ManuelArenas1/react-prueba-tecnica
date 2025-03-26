import { useEffect, useState } from "react"
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true'

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const {fact} = data
                setFact(fact)

                const threefirstWord = fact.split(' ', 3).join(' ')

                fetch(`https://cataas.com/cat/says/${threefirstWord}?size=50&color=red&json=true`)
                    .then(res => res.json())
                    .then(response => {
                        const {url} = response
                        setImageUrl(url)
                    })

            })
    }, [])

    return (
        <main>
            <h1>App de gatitos</h1>
            <section>
                {fact && <p>{fact}</p>} 
                {imageUrl && <img src={imageUrl} alt={'Image extracted using the first using the first word of the fact'} />}

            </section>
            
            
            
        </main>

    )
}