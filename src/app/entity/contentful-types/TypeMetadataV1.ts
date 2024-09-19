import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeMetadataV1Fields {
    id: EntryFieldTypes.Symbol;
    pageTitle: EntryFieldTypes.Symbol;
    pageDescription: EntryFieldTypes.Symbol;
    pageKeywords: EntryFieldTypes.Symbol;
    indexEnabled: EntryFieldTypes.Boolean;
    openGraphTitle?: EntryFieldTypes.Symbol;
    openGraphDescription?: EntryFieldTypes.Symbol;
    openGraphImage?: EntryFieldTypes.Symbol;
}

export type TypeMetadataV1Skeleton = EntrySkeletonType<TypeMetadataV1Fields, "metadataV1">;
export type TypeMetadataV1<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeMetadataV1Skeleton, Modifiers, Locales>;
