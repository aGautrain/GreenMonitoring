// Represent the thing we are measuring

export interface Entity {
    min: number;
    max: number;
    unit: string;
    label: string;
}


// In adequation with the server records
// -> /records/temperature
// -> /records/humidity

export interface Record {
    value: number;
    id: number;
    date: Date;
}

// The object we'll pass to the components

export interface Tracking {
    records: Record[];
    correspondingTo: Entity;
    name: string;
    subscription: any;
}
