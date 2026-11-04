import { OFFICES } from "./geo";

// Shared globe data: Universal's offices and the three hub corridors.
export const HUB_LL = {
  USA: [40.2, -74.4] as [number, number],
  UAE: [25.2, 55.27] as [number, number],
  IND: [13.08, 80.27] as [number, number],
};

const HUB_ID: Record<string, string> = { "New Jersey": "nj", Dubai: "dxb", Chennai: "maa" };

export function officeMarkers(active?: "USA" | "IND" | "UAE") {
  return OFFICES.map((o) => {
    const id = HUB_ID[o.city];
    const on = active ? o.hub === active : Boolean(id);
    return {
      location: [o.lat, o.lon] as [number, number],
      size: id ? (on ? 0.07 : 0.045) : on ? 0.045 : 0.026,
      ...(id ? { id } : {}),
    };
  });
}

export const ALL_ARCS = [
  { from: HUB_LL.USA, to: HUB_LL.UAE, id: "usa-uae" },
  { from: HUB_LL.UAE, to: HUB_LL.IND, id: "uae-ind" },
  { from: HUB_LL.USA, to: HUB_LL.IND, id: "usa-ind" },
];

export function arcsFrom(hub: "USA" | "IND" | "UAE") {
  return (Object.keys(HUB_LL) as (keyof typeof HUB_LL)[])
    .filter((k) => k !== hub)
    .map((k) => ({ from: HUB_LL[hub], to: HUB_LL[k], id: `${hub}-${k}`.toLowerCase() }));
}

export const HUB_LABELS = [
  { id: "nj", label: "New Jersey", location: HUB_LL.USA },
  { id: "dxb", label: "Dubai", location: HUB_LL.UAE },
  { id: "maa", label: "Chennai", location: HUB_LL.IND, below: true },
];
