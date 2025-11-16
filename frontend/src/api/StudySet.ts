import AxiosAPI from "./AxiosAPI";
import type { StudySet } from "../types/StudySet";
import type { Word } from "../types/Word";

export async function getStudySet(id: string|undefined): Promise<[StudySet, Word[]]|null> {
    if (id === undefined) return null;

    try {
        const response = await AxiosAPI.get("/api/get/set/words/" + id);
        const set: StudySet = response.data.set;
        const words: Word[] = response.data.words;
        return [ set, words ];
    } catch (error) {
        console.log(error);
        return null;
    }
}