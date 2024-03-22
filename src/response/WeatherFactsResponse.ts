export interface WeatherFactsResponse {
    results: Result[];
}

export interface Result {
    location: Location;
    now: Now;
    last_update: string;
}

export interface Location {
    id: string;
    name: string;
    country: string;
    path: string;
    timezone: string;
    timezone_offset: string;
}

export interface Now {
    text: string;
    code: string;
    temperature: string;
}
