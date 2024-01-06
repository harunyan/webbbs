import {UUID} from "node:crypto";

export type ThreadRoot = {
    rootId: UUID,
    date: Date,
    author: string,
    title: string,
    body: string,
}
