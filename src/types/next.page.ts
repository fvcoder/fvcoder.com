export type PageProps<T = Record<string, string>, K = Record<string, string>> = {
	params: T;
	searchParams: K;
};
