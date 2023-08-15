import { prismic } from "../dom/connect";

export function getAboutData() {
    return prismic.getByType("about");
}