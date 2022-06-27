import { Client } from "./Client";
import { Industry } from "./Industry";

export class CommercialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private ri: string,
        public machinesQuantity: number,
        public cep: string
    ) {
        super(machinesQuantity, cep)
    }

    public getRI(): string {
        return this.ri;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45;
    }

}
