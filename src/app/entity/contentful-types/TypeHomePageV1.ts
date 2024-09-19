import type { Entry, EntryFieldTypes, EntrySkeletonType } from "contentful";
import type { TypeBannerV1Skeleton } from "./TypeBannerV1";
import type { TypeButtonV1Skeleton } from "./TypeButtonV1";
import type { TypeCardGroupV1Skeleton } from "./TypeCardGroupV1";
import type { TypeCardV1Skeleton } from "./TypeCardV1";
import type { TypeHeroV1Skeleton } from "./TypeHeroV1";
import type { TypeMetadataV1Skeleton } from "./TypeMetadataV1";

export interface TypeHomePageV1Fields {
    id: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    sections?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBannerV1Skeleton | TypeButtonV1Skeleton | TypeCardGroupV1Skeleton | TypeCardV1Skeleton | TypeHeroV1Skeleton>>;
    pageMetadata: EntryFieldTypes.EntryLink<TypeMetadataV1Skeleton>;
}

export type TypeHomePageV1Skeleton = EntrySkeletonType<TypeHomePageV1Fields, "homePageV1">;
export type TypeHomePageV1 = Entry<TypeHomePageV1Skeleton>;
