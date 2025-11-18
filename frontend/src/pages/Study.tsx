import type { JSX } from "react";
import type { StudySet } from "../types/StudySet";
import type { Word } from "../types/Word";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getStudySet } from "../api/StudySet";
import BaseLayout from "../layouts/BaseLayout";
import { FlashCardSet } from "../components/FlashCardSet";

function Study(): JSX.Element {
    const { id } = useParams();
    const { isPending, isError, error, data } = useQuery({
        queryKey: ["id", id],
        queryFn: () => getStudySet(id)
    });

    if (isPending) return (<p>Loading...</p>);
    if (isError) return (<p>Something went wrong: { error.message }</p>);

    if (data) {
        const studySet: StudySet = data[0];
        const words: Word[] = data[1];

        return (
            <BaseLayout>
                <h1>{ studySet.name }</h1>
                <p>{ studySet.description }</p>
                <p>Created on : { studySet.created_at }</p>
                <p>Last updated on : { studySet.updated_at }</p>
                <FlashCardSet set={ studySet } words={ words } />
            </BaseLayout>
        );
    }

    return (<p>Unknown set!</p>);
}

export default Study;