export class Shipping {
    name: string;
    addressLine1: string;
    addressLine2: string;
    city: string;

    constructor(
        name: string,
        addressLine1: string,
        addressLine2: string,
        city: string) {
        this.name = name;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
    }
}