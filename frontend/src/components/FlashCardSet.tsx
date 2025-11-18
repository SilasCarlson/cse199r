import { useState } from "react";
import { FlashCard } from './FlashCard';
import type { JSX } from "react";
import type { StudySet } from "../types/StudySet";
import type { Word } from "../types/Word";

interface IFlashCardSetProps {
    set: StudySet;
    words: Word[];
}

export function FlashCardSet(props: IFlashCardSetProps): JSX.Element {
    const [ activeFlashCardIndex, setActiveFlashCardIndex ] = useState(0);

    const nextFlashCard = () => {
        setActiveFlashCardIndex((activeFlashCardIndex + 1) % props.words.length);
    }

    return (
        <>
            <FlashCard word={ props.words[activeFlashCardIndex] } />
            <button type="button" onClick={ nextFlashCard }>Next</button>
        </>
    );
}