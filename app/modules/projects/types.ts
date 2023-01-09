export interface projectInfo {
	to: string;
	title: string;
	date: string;
	img: string;
	imgAlt: string;
}

export interface projectPage {
	post: projectInfo[];
	page: number;
	totalPage: number;
}
