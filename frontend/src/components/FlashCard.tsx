import { useState, useEffect } from "react";
import type { JSX } from "react";
import type { Word } from "../types/Word";

interface IFlashCardProps {
    word: Word;
}

export function FlashCard(props: IFlashCardProps): JSX.Element {

    const [ frontIsActive, setFrontIsActive ] = useState<Boolean>(true);

    function flipCard(): void {
        setFrontIsActive(isActive => !isActive);
    }

    function handleKeyDown(event: KeyboardEvent): void {
        // If the spacer bar is pressed then flip the card
        if (event.code === "Space") flipCard();
    }

    useEffect(() => {
        document.addEventListener("keyup", handleKeyDown);

        return () => {
            document.removeEventListener("keyup", handleKeyDown);
        }
    }, []);

    if (!frontIsActive) {
        return (
            <div className="flashcard unselectable" onClick={ flipCard }>
                <div className="back">
                    <h2>{ props.word.foreign_word }</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="flashcard unselectable" onClick={ flipCard }>
            <div className="front">
                <h2>{ props.word.native_word }</h2>
            </div>
        </div>
    );
}