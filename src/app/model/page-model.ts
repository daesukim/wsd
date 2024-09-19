import { TypeHomePageV1 } from "../entity/contentful-types";

export interface PageComponent {
    page: TypeHomePageV1 | null;
    preview: boolean;
}