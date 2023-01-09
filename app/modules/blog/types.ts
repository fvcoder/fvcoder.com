export interface blogInfo {
	to: string;
	title: string;
	date: string;
	img: string;
	imgAlt: string;
	description: string;
}

export interface blogPage {
	post: blogInfo[];
	page: number;
	totalPage: number;
}
