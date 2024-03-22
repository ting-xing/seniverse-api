export interface IndexOfLifeResponse {
    results: Result[];
}

export interface Result {
    location: Location;
    suggestion: Suggestion;
    last_update: Date;
}

export interface Location {
    id: string;
    name: string;
    country: string;
    path: string;
    timezone: string;
    timezone_offset: string;
}

export interface Suggestion {
    car_washing: CarWashing;
    dressing: CarWashing;
    flu: CarWashing;
    sport: CarWashing;
    travel: CarWashing;
    uv: CarWashing;
}

export interface CarWashing {
    brief: string;
    details: string;
}