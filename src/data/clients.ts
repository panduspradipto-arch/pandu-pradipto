import type { Client } from "@/types/content";

/**
 * The 25 confirmed clients, per docs/PORTFOLIO_CONTENT_MAP.md §11.
 *
 * The single source of truth for client names across the whole site — the
 * homepage marquee and the /about index both read from here. Only these names
 * may appear as clients.
 *
 * The original homepage marquee listed Cerahati, Dentsu and VMLY&R (all
 * AGENCIES, not clients) plus Kalbe Farma and Cimory (not confirmed). All five
 * were removed; only BRI and Rucika survived from that list.
 *
 * Listed once — ClientSection duplicates the row itself to make the loop
 * seamless, so don't pad this array with repeats.
 */
export const confirmedClients: Client[] = [
  { name: "ABC" },
  { name: "Balsem Lang" },
  { name: "Bank Mandiri" },
  { name: "BRI" },
  { name: "BTN" },
  { name: "Daihatsu" },
  { name: "Djabesmen" },
  { name: "Ensure" },
  { name: "Fatigon" },
  { name: "Hotlicks" },
  { name: "Japota" },
  { name: "JOAYO" },
  { name: "Kit Kat" },
  { name: "Micromine" },
  { name: "Mila D'Opiz" },
  { name: "Prudential" },
  { name: "realme" },
  { name: "Rucika" },
  { name: "Schwarzkopf" },
  { name: "Telon Lang" },
  { name: "Torabika" },
  { name: "TriPollar" },
  { name: "Ula" },
  { name: "Woods'" },
  { name: "XL" },
];

/**
 * Agencies are NOT clients and are never listed as such.
 *
 * Only confirmed entries appear. Dentsu and Cerahati are deliberately absent —
 * both remain unconfirmed in the content map.
 */
export const agencies: Client[] = [{ name: "VMLY&R" }];
