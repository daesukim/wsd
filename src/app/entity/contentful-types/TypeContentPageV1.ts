import { EntryFieldTypes, EntrySkeletonType, Entry } from "contentful";
import { TypeBannerV1Skeleton } from "./TypeBannerV1";
import { TypeButtonV1Skeleton } from "./TypeButtonV1";
import { TypeCardGroupV1Skeleton } from "./TypeCardGroupV1";
import { TypeCardV1Skeleton } from "./TypeCardV1";
import { TypeHeroV1Skeleton } from "./TypeHeroV1";
import { TypeMetadataV1Skeleton } from "./TypeMetadataV1";

export interface TypeContentPageV1Fields {
    id: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    sections?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBannerV1Skeleton | TypeButtonV1Skeleton | TypeCardGroupV1Skeleton | TypeCardV1Skeleton | TypeHeroV1Skeleton>>;
    pageMetadata: EntryFieldTypes.EntryLink<TypeMetadataV1Skeleton>;
}

export type TypeContentPageV1Skeleton = EntrySkeletonType<TypeContentPageV1Fields, "contentPageV1">;
export type TypeContentPageV1 = Entry<TypeContentPageV1Skeleton>;