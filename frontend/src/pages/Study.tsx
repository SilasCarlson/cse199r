import api from "../api/axios";
import { JSX, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { AxiosResponse } from "axios";
import BaseLayout from "../layouts/BaseLayout";
import type { Word } from "../types/Word";

interface FlashcardSet {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
}

function Study(): JSX.Element {
    const { setId } = useParams();
    const [ flashcardSet, setFlashcardSet ] = useState<FlashcardSet|null>(null);
    const [ words, setWords ] = useState<Word[]>([]);

    // get api crap
    useEffect((): void => {
        const getSet: () => Promise<void> = async (): Promise<void> => {
            const response: AxiosResponse = await api.get("/api/get/set/" + setId);
            const set: FlashcardSet = response.data.set;
            setFlashcardSet(set);

            const response2: AxiosResponse = await api.get("/api/get/set/words/" + setId);
            const words: Word[] = response2.data.words;
            setWords(words);
        };

        getSet().then();
    }, [])

    if (flashcardSet === null) {
        return (
            <>
                <p>Loading...</p>
            </>
        )
    }

    return (
        <BaseLayout>
            <h1>{ flashcardSet.name }</h1>
            <p>{ flashcardSet.description }</p>
            <p>Created on : { flashcardSet.created_at }</p>
            <p>Last updated on : { flashcardSet.updated_at }</p>
            <ol>
                {words.map((word: Word, index: number) => (
                    <li key={ index }>{ word.native_word } -- { word.foreign_word }</li>
                ))}
            </ol>
        </BaseLayout>
    );
}

export default Study;