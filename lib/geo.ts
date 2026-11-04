// Coordinates for the places the planner suggests, the company's offices,
// and helpers to resolve free text and project onto the dot maps.

export type Place = { name: string; code: string; lon: number; lat: number; hub: "USA" | "IND" | "UAE" | null };

export const PLACES: Place[] = [
  { name: "New Jersey, USA", code: "NJ", lon: -74.4, lat: 40.2, hub: "USA" },
  { name: "New York, USA", code: "NYC", lon: -74.0, lat: 40.7, hub: "USA" },
  { name: "Maryland, USA", code: "MD", lon: -76.6, lat: 39.0, hub: "USA" },
  { name: "Georgia, USA", code: "GA", lon: -84.4, lat: 33.7, hub: "USA" },
  { name: "Texas, USA", code: "TX", lon: -96.8, lat: 32.8, hub: "USA" },
  { name: "California, USA", code: "CA", lon: -121.9, lat: 37.4, hub: "USA" },
  { name: "Chennai, India", code: "MAA", lon: 80.27, lat: 13.08, hub: "IND" },
  { name: "Bangalore, India", code: "BLR", lon: 77.59, lat: 12.97, hub: "IND" },
  { name: "Hyderabad, India", code: "HYD", lon: 78.49, lat: 17.39, hub: "IND" },
  { name: "Mumbai, India", code: "BOM", lon: 72.88, lat: 19.08, hub: "IND" },
  { name: "New Delhi, India", code: "DEL", lon: 77.21, lat: 28.61, hub: "IND" },
  { name: "Dubai, UAE", code: "DXB", lon: 55.27, lat: 25.2, hub: "UAE" },
  { name: "Abu Dhabi, UAE", code: "AUH", lon: 54.37, lat: 24.45, hub: "UAE" },
  { name: "London, UK", code: "LON", lon: -0.13, lat: 51.5, hub: null },
  { name: "Singapore", code: "SIN", lon: 103.82, lat: 1.35, hub: null },
  { name: "Toronto, Canada", code: "YYZ", lon: -79.38, lat: 43.65, hub: null },
  { name: "Sydney, Australia", code: "SYD", lon: 151.21, lat: -33.87, hub: null },
];

// Extra lookups so typed text like "Delhi", "NJ", "Bengaluru" or a country still resolves.
const ALIASES: Record<string, string> = {
  nj: "New Jersey, USA",
  "new jersey": "New Jersey, USA",
  edison: "New Jersey, USA",
  newark: "New Jersey, USA",
  ny: "New York, USA",
  nyc: "New York, USA",
  "new york": "New York, USA",
  usa: "New Jersey, USA",
  "united states": "New Jersey, USA",
  us: "New Jersey, USA",
  atlanta: "Georgia, USA",
  houston: "Texas, USA",
  dallas: "Texas, USA",
  austin: "Texas, USA",
  "san francisco": "California, USA",
  "san jose": "California, USA",
  "los angeles": "California, USA",
  baltimore: "Maryland, USA",
  madras: "Chennai, India",
  bengaluru: "Bangalore, India",
  delhi: "New Delhi, India",
  gurgaon: "New Delhi, India",
  noida: "New Delhi, India",
  bombay: "Mumbai, India",
  pune: "Mumbai, India",
  india: "Chennai, India",
  uae: "Dubai, UAE",
  emirates: "Dubai, UAE",
  sharjah: "Dubai, UAE",
  "abu dhabi": "Abu Dhabi, UAE",
  uk: "London, UK",
  england: "London, UK",
  canada: "Toronto, Canada",
  australia: "Sydney, Australia",
};

export function resolvePlace(text: string): Place | null {
  const q = text.trim().toLowerCase();
  if (q.length < 2) return null;
  const exact = PLACES.find((p) => p.name.toLowerCase() === q);
  if (exact) return exact;
  const byCity = PLACES.find((p) => p.name.toLowerCase().split(",")[0] === q);
  if (byCity) return byCity;
  const alias = ALIASES[q];
  if (alias) return PLACES.find((p) => p.name === alias) ?? null;
  if (q.length >= 3) {
    const starts = PLACES.find((p) => p.name.toLowerCase().startsWith(q));
    if (starts) return starts;
    for (const [k, v] of Object.entries(ALIASES)) if (k.length >= 3 && q.includes(k)) return PLACES.find((p) => p.name === v) ?? null;
  }
  return null;
}

export const OFFICES: { city: string; hub: "USA" | "IND" | "UAE"; lon: number; lat: number }[] = [
  { city: "New Jersey", hub: "USA", lon: -74.4, lat: 40.2 },
  { city: "Maryland", hub: "USA", lon: -76.6, lat: 39.0 },
  { city: "Georgia", hub: "USA", lon: -84.4, lat: 33.7 },
  { city: "Texas", hub: "USA", lon: -96.8, lat: 32.8 },
  { city: "California", hub: "USA", lon: -121.9, lat: 37.4 },
  { city: "Chennai", hub: "IND", lon: 80.27, lat: 13.08 },
  { city: "Bangalore", hub: "IND", lon: 77.59, lat: 12.97 },
  { city: "Hyderabad", hub: "IND", lon: 78.49, lat: 17.39 },
  { city: "Mumbai", hub: "IND", lon: 72.88, lat: 19.08 },
  { city: "New Delhi", hub: "IND", lon: 77.21, lat: 28.61 },
  { city: "Dubai", hub: "UAE", lon: 55.27, lat: 25.2 },
];

export const HUB_POINTS = {
  USA: { lon: -74.4, lat: 40.2 },
  IND: { lon: 80.27, lat: 13.08 },
  UAE: { lon: 55.27, lat: 25.2 },
} as const;

/** Equirectangular viewport onto the world, in degrees. */
export type View = { lon0: number; lon1: number; lat0: number; lat1: number };

export function project(view: View, lon: number, lat: number, w: number, h: number) {
  return {
    x: ((lon - view.lon0) / (view.lon1 - view.lon0)) * w,
    y: ((view.lat1 - lat) / (view.lat1 - view.lat0)) * h,
  };
}

/** A view that frames both points with margin, at the given aspect (w / h). */
export function frameRoute(a: Place, b: Place, aspect: number): View {
  const pad = 14;
  let lon0 = Math.min(a.lon, b.lon) - pad;
  let lon1 = Math.max(a.lon, b.lon) + pad;
  let lat0 = Math.min(a.lat, b.lat) - pad;
  let lat1 = Math.max(a.lat, b.lat) + pad * 1.5;
  // widen to aspect
  const w = lon1 - lon0;
  const h = lat1 - lat0;
  if (w / h > aspect) {
    const nh = w / aspect;
    const c = (lat0 + lat1) / 2;
    lat0 = c - nh / 2;
    lat1 = c + nh / 2;
  } else {
    const nw = h * aspect;
    const c = (lon0 + lon1) / 2;
    lon0 = c - nw / 2;
    lon1 = c + nw / 2;
  }
  // keep minimum zoom so short hops still show context
  const minW = 60;
  if (lon1 - lon0 < minW) {
    const k = minW / (lon1 - lon0);
    const cx = (lon0 + lon1) / 2;
    const cy = (lat0 + lat1) / 2;
    lon0 = cx - ((cx - lon0) * k);
    lon1 = cx + ((lon1 - cx) * k);
    lat0 = cy - ((cy - lat0) * k);
    lat1 = cy + ((lat1 - cy) * k);
  }
  return { lon0, lon1, lat0, lat1 };
}
