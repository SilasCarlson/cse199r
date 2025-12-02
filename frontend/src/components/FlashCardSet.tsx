import { useState, useEffect, useCallback } from "react";
import { FlashCard } from './FlashCard';
import type { JSX } from "react";
import type { StudySet } from "../types/StudySet";
import type { Word } from "../types/Word";

import "../styles/Flashcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface IFlashCardSetProps {
    set: StudySet;
    words: Word[];
}

export function FlashCardSet(props: IFlashCardSetProps): JSX.Element {
    const [ activeFlashCardIndex, setActiveFlashCardIndex ] = useState(0);

    const nextFlashCard = () => {
        setActiveFlashCardIndex(index => (index + 1) % props.words.length);
    }

    const previousFlashCard = () => {
        setActiveFlashCardIndex(index => {
            if (index == 0) return props.words.length - 1;
            return index - 1;
        });
    }

    // When a key is pressed
    const handleKeyDown = useCallback((event: KeyboardEvent): void => {
        if (event.key == "ArrowRight") nextFlashCard();
        else if (event.key == "ArrowLeft") previousFlashCard();
    }, []);

    // When the component is mounted then add some event handlers to the document
    useEffect((): () => void => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, []);

    return (
        <div className="flashcard-container">
            <FlashCard word={ props.words[activeFlashCardIndex] } />
            <div className="controls">
                <button onClick={ previousFlashCard }>
                    <FontAwesomeIcon icon={ faArrowLeft } />
                </button>
                <button onClick={ nextFlashCard }>
                    <FontAwesomeIcon icon={ faArrowRight } />
                </button>
            </div>
        </div>
    );
}