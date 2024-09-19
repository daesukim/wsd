import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCallToActionV1Fields {
    id: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    url: EntryFieldTypes.Symbol;
}

export type TypeCallToActionV1Skeleton = EntrySkeletonType<TypeCallToActionV1Fields, "callToActionV1">;
export type TypeCallToActionV1<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCallToActionV1Skeleton, Modifiers, Locales>;
