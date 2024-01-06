import {UUID} from "node:crypto";

export type ThreadItem = {
    rootId: UUID,
    itemId: UUID,
    date: Date,
    author: string,
    body: string,
}
