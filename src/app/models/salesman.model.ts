import { Category, Coordinates, UUID } from "./common";

export interface ISalesman {
    id: UUID;
    name: string;
    category: Category;
    address: string;
    isActive: boolean;
    coordinates: Coordinates;
    photo: string;
    vehicle: string;
}

export class Salesman {
    id: UUID;
    name: string;
    category: Category;
    address: string;
    isActive: boolean;
    coordinates: Coordinates;
    photo: string;
    vehicle: string;

    constructor(salesman: ISalesman) {
        this.id = salesman.id;
        this.name = salesman.name;
        this.category = salesman.category;
        this.address = salesman.address;
        this.isActive = salesman.isActive;
        this.coordinates = salesman.coordinates
        this.photo = salesman.photo;
        this.vehicle = salesman.vehicle
    }

    get status(): string {
        return this.isActive ? 'Activo' : 'Inactivo';
    }
}
