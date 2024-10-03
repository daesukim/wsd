import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";

export interface TypeMetadataV1Fields {
    id: EntryFieldTypes.Symbol;
    pageTitle: EntryFieldTypes.Symbol;
    pageDescription: EntryFieldTypes.Symbol;
    pageKeywords: EntryFieldTypes.Symbol;
    openGraphTitle?: EntryFieldTypes.Symbol;
    openGraphDescription?: EntryFieldTypes.Symbol;
    openGraphImage?: EntryFieldTypes.AssetLink;
    indexEnabled: EntryFieldTypes.Boolean;
}

export type TypeMetadataV1Skeleton = EntrySkeletonType<TypeMetadataV1Fields, "metadataV1">;
export type TypeMetadataV1 = Entry<TypeMetadataV1Skeleton>;
