import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHeroV1Fields {
    id: EntryFieldTypes.Symbol;
    type: EntryFieldTypes.Symbol<"Mini Hero" | "Standard Hero">;
    backgroundColor: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    heroImage?: EntryFieldTypes.AssetLink;
}

export type TypeHeroV1Skeleton = EntrySkeletonType<TypeHeroV1Fields, "heroV1">;
export type TypeHeroV1<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroV1Skeleton, Modifiers, Locales>;
