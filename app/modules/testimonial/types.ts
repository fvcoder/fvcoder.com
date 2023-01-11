export interface testimonialInfo {
	username: string;
	role: string;
	avatar: string;
	review: string;
}

export interface testimonialPage {
	post: testimonialInfo[];
	page: number;
	totalPage: number;
}
