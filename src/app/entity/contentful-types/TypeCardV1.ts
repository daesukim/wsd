import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCallToActionV1Skeleton } from "./TypeCallToActionV1";

export interface TypeCardV1Fields {
    id: EntryFieldTypes.Symbol;
    type: EntryFieldTypes.Symbol<"Card Link" | "Footer Link">;
    cardBorderColor?: EntryFieldTypes.Symbol;
    backgroundColor?: EntryFieldTypes.Symbol;
    textColor?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    body?: EntryFieldTypes.Text;
    callToAction?: EntryFieldTypes.EntryLink<TypeCallToActionV1Skeleton>;
    footer?: EntryFieldTypes.Symbol;
}

export type TypeCardV1Skeleton = EntrySkeletonType<TypeCardV1Fields, "cardV1">;
export type TypeCardV1<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCardV1Skeleton, Modifiers, Locales>;
