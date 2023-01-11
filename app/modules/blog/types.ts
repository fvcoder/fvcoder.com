import type { BlogDocument } from "~/integrations/prismic/types";

export interface blogInfo {
	to: string;
	title: string;
	date: string;
	img: string;
	imgAlt: string;
	description: string;
}

export interface blogPost extends Omit<blogInfo, "to"> {
	data: BlogDocument["data"];
	related: blogInfo[];
}

export interface blogPage {
	post: blogInfo[];
	page: number;
	totalPage: number;
}
