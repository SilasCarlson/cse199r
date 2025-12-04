import type { JSX } from "react";
import BaseLayout from "../layouts/BaseLayout";
import {useQuery} from "@tanstack/react-query";
import {getAllStudySets} from "../api/StudySet";
import {StudySet} from "../types/StudySet";
import {Link} from "react-router-dom";

interface ISetSectionProps {
    key: number,
    set: StudySet
}

function SetSection(props: ISetSectionProps): JSX.Element {
    return (
        <div key={ props.key }>
            <h2><Link to={ "/study/" + props.set.id }>{ props.set.name }</Link></h2>
            <p>{ props.set.description }</p>
        </div>
    );
}

function Sets(): JSX.Element {
    const { isPending, isError, error, data } = useQuery({
        queryKey: [],
        queryFn: getAllStudySets
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
            <p>There are no sets!</p>
        </BaseLayout>
    );

    return (
        <BaseLayout>
            <header>
                <h1>Sets</h1>
            </header>
            <main>
                {data.map((set: StudySet, index: number) => (
                    <SetSection key={ index } set={ set } />
                ))}
            </main>
        </BaseLayout>
    );
}

export default Sets;