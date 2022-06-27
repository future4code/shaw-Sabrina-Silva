export interface Client {
  name: string;
  registrationNumber: number;
  consumedEnergy: number;
  calculateBill(): number;
}

// export class Client {
//   constructor(
//     public name: string,
//     public registrationNumber: number,
//     public consumedEnergy: number){
//     }
//     public calculateBill () {
//       return {
//         registration: this.registrationNumber,
//         consumed: this.consumedEnergy
//       }
//     }
// }


