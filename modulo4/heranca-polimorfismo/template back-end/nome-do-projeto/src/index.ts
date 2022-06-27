//import { Client } from "./Client";
import { Commerce } from "./Commerce";
import { Customer } from "./Customer";
import { Industry } from "./Industry";
import { Place } from "./Place";
import { Residence } from "./Residence";
import { ResidentialClient } from "./ResidentialClient";
import { User } from "./User";


//const matheus = new User("kaj4ha70dm", "matheus@matheus.com", "Matheus", "1234567")

//console.log([matheus.getName(), matheus.getEmail(), matheus.getId()])

const customer1 = new Customer("paol3jh7", "larissa@larissa.com", "Larissa", "789456", "Visa")

// console.log([customer1.getName(), customer1.getEmail(), customer1.getId(), customer1.getCreditCard(), customer1.purchaseTotal]);

// console.log(customer1.getPassword());

//console.log(customer1.introduceYourself());

// const client: Cliente = {
//     name: "Brenda",
//     registrationNumber: 1,
//     consumedEnergy: 100,
  
//     calculateBill: () => {
//       return 2;
//     }
//   }

 // console.log([client.name, client.registrationNumber, client.consumedEnergy, client.calculateBill()]);

  const casa1 = new Residence(2, "89225800")

 // console.log([casa1.getCep(), casa1.getResidentsQuantity()]);
  
  const commerce1 = new Commerce(5, "89365100")

  //console.log([commerce1.getCep(), commerce1.getFloorsQuantity()]);

  const industry1 = new Industry(35, "96541200")

  //console.log([industry1.getCep(), industry1.getMachinesQuantity()])

  const residence1 = new ResidentialClient("Matheus", 215746, 50, "520964123", 5, "54635900")

 //console.log(residence1.calculateBill());
    
  

