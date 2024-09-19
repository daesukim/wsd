import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCardV1Skeleton } from "./TypeCardV1";

export interface TypeCardGroupV1Fields {
    id: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    cards: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardV1Skeleton>>;
}

export type TypeCardGroupV1Skeleton = EntrySkeletonType<TypeCardGroupV1Fields, "cardGroupV1">;
export type TypeCardGroupV1<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCardGroupV1Skeleton, Modifiers, Locales>;
