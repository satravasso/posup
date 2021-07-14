export interface Updates {
  id: number;
  updated_at: string;
  author: string;
  created_at: string;
  publish: boolean;
  translations: { locale: string; content: string }[];
  publish_locations: ("game" | "riotclient" | "riotstatus")[];
}

export interface Incident {
  id: number;
  updated_at: string | null;
  titles: { locale: string; content: string }[];
  created_at: string;
  incident_severity: "info" | "warning" | "critical";
  maintenance_status: "scheduled" | "in_progress" | "complete";
  platforms: (
    | "windows"
    | "macos"
    | "android"
    | "ios"
    | "ps4"
    | "xbone"
    | "switch"
  )[];
  updates: Updates[];
  archive_at: string | null;
}

export interface APIServerStatus {
  id: string;
  name: string;
  locales: string[];
  maintenances: Incident[];
  incidents: Incident[];
}

export interface ServerStatus {
  title: string;
  messages: string[];
  platforms: Incident["platforms"];
  created_at: Incident["created_at"];
  incident_severity: Incident["incident_severity"];
}

export type Regions =
  | "br1"
  | "eun1"
  | "euw1"
  | "jp1"
  | "kr"
  | "la1"
  | "la2"
  | "na1"
  | "oc1"
  | "pbe1"
  | "ru"
  | "tr1";
