import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeButtonV1Fields {
    id: EntryFieldTypes.Symbol;
    buttonColor: EntryFieldTypes.Symbol;
    buttonText: EntryFieldTypes.Symbol;
    url?: EntryFieldTypes.Symbol;
}

export type TypeButtonV1Skeleton = EntrySkeletonType<TypeButtonV1Fields, "buttonV1">;
export type TypeButtonV1<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeButtonV1Skeleton, Modifiers, Locales>;
