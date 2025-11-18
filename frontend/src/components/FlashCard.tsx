import { useState } from "react";
import type { JSX } from "react";
import type { Word } from "../types/Word";

interface IFlashCardProps {
    word: Word;
}

export function FlashCard(props: IFlashCardProps): JSX.Element {

    const [ frontIsActive, setFrontIsActive ] = useState<Boolean>(true);

    function flipCard(): void {
        setFrontIsActive(!frontIsActive);
    }

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