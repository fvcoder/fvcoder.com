export function res404(): void {
	throw new Response("Not Found", {
		status: 404,
	});
}
