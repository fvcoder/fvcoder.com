import dayjs from "dayjs";

export function dateFotmat(d: string): string {
	return dayjs(d).format("DD MMMM, YYYY");
}
