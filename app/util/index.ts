import dayjs from "dayjs";

/**
 * @param {string} d fecha
 * @returns 12 octubre, 2000
 */
export function dateFotmat(d: string): string {
	return dayjs(d).format("DD MMMM, YYYY");
}
/**
 * @param url url actual
 * @returns {number} numero de pagina actual
 */
export function getNumberPage(url: URL): number {
	const page = url.searchParams.has("page")
		? Number.isNaN(Number(url.searchParams.get("page")))
			? 1
			: Number(url.searchParams.get("page"))
		: 1;

	return page;
}
