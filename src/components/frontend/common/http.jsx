// Base API and file URLs. Keep the trailing slash — required for
// relative URL construction (new URL(..., base)). We also expose
// helpers to build safe URLs so callers don't accidentally produce
// malformed URLs like: https://domainget-testimonials
const _API_BASE = "https://skyline-heights-construction-production.up.railway.app/api/";
const _FILE_BASE = "https://skyline-heights-construction-production.up.railway.app/";

const ensureTrailingSlash = (u) => (u && u.endsWith("/") ? u : u + "/");

export const apiUrl = ensureTrailingSlash(_API_BASE);
export const fileUrl = ensureTrailingSlash(_FILE_BASE);

export const token = JSON.parse(localStorage.getItem("userInfo"))?.token;

// Build a safe API URL from a path, removing duplicate/missing slashes.
export const buildApiUrl = (path = "") => {
	const p = String(path || "").replace(/^\/+/, "");
	return apiUrl + p;
};

// Build a safe file URL similarly.
export const buildFileUrl = (path = "") => {
	const p = String(path || "").replace(/^\/+/, "");
	return fileUrl + p;
};

// Backwards-compatible exports: some components use string concatenation
// or `new URL(.., apiUrl)`. Normalizing `apiUrl` above (ensuring the
// trailing slash) prevents `new URL` from producing malformed URLs.
