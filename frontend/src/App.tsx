import { useState, useEffect } from "react";
import type { JSX } from "react";
import type { Set } from "./types/Set";
import type { Word } from "./types/Word";
import { FlashCard } from "./components/FlashCard";
import './App.css';

function App(): JSX.Element {

    const [ set, setSet ] = useState<null|Set>(null);
    const [ words, setWords ] = useState<null|Word[]>(null);
    const [ flashCardIndex, setFlashCardIndex ] = useState<number>(0);

    const [ loading, setLoading ] = useState(true);
    const [ error , setError ] = useState(null);

    useEffect((): void => {
        const fetchData: () => Promise<void> = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/get/set/1");
                const result = await response.json();
                const resultSet: Set = result.set;

                setSet(resultSet);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }

            try {
                const response = await fetch("http://localhost:8000/api/get/set/words/1");
                const result = await response.json();
                const resultWords: Word[] = result.words;

                setWords(resultWords);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    const handleClick = () => {
        if (words === null) return;

        let index = flashCardIndex + 1;
        if (index >= words.length) index = 0;
        setFlashCardIndex(index);
    }

    if (loading) {
        return <p>Waiting for response from server...</p>
    }

    if (error !== null || set === null || words === null) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <h1>{ set.name }</h1>
            <FlashCard word={ words[flashCardIndex] }></FlashCard>
            <button onClick={ handleClick }>Next</button>
        </>
    );
}

export default App;
