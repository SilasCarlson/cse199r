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

    if (isPending) return (
        <BaseLayout>
            <p>Loading...</p>
        </BaseLayout>

    );

    if (isError) return (
        <BaseLayout>
            <p>Something went wrong: { error.message }</p>
        </BaseLayout>
    );

    if (!data) return (
        <BaseLayout>
            <p>Unknown set!</p>
        </BaseLayout>
    );

    const studySet: StudySet = data[0];
    const words: Word[] = data[1];

    return (
        <BaseLayout>
            <FlashCardSet set={ studySet } words={ words } />
        </BaseLayout>
    );
}

export default Study;