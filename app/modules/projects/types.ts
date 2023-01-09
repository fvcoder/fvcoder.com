import type { ProjectDocument } from "~/integrations/prismic/types";

export interface projectInfo {
	to: string;
	title: string;
	date: string;
	img: string;
	imgAlt: string;
}

export interface projectPost extends Omit<projectInfo, "to"> {
	data: ProjectDocument["data"];
}

export interface projectPage {
	post: projectInfo[];
	page: number;
	totalPage: number;
}
