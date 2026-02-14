export function safeJsonParse<T>(value: any, fallback: T): T {
  try {
    if (value === undefined || value === null) return fallback;

    // already parsed object/array
    if (typeof value === "object") return value as T;

    if (typeof value !== "string") return fallback;

    const trimmed = value.trim();
    if (!trimmed || trimmed === "undefined" || trimmed === "null") return fallback;

    return JSON.parse(trimmed) as T;
  } catch {
    return fallback;
  }
}