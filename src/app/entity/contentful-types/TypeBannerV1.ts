import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeButtonV1Skeleton } from "./TypeButtonV1";

export interface TypeBannerV1Fields {
    id: EntryFieldTypes.Symbol;
    backgroundColor: EntryFieldTypes.Symbol;
    bannerImage?: EntryFieldTypes.AssetLink;
    bannerTitle?: EntryFieldTypes.Symbol;
    bannerDetails?: EntryFieldTypes.Text;
    bannerButton?: EntryFieldTypes.EntryLink<TypeButtonV1Skeleton>;
}

export type TypeBannerV1Skeleton = EntrySkeletonType<TypeBannerV1Fields, "bannerV1">;
export type TypeBannerV1<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBannerV1Skeleton, Modifiers, Locales>;
