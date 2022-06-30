export enum UserRole {
   ADMIN = "ADMIN",
   NORMAL = "NORMAL"
}

export type user = {
   id: string
   name: string
   email: string
   password: string
   role: UserRole
}

export type AuthenticationData = {
   id: string,
   role: UserRole
}

export type Recipe = {
   id: string,
   title: string,
   description: string,
   createDate: string,
   user_id: string
}

export class Users {
   constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string,
      private role: UserRole
   ) { }
   public getId() {
      return this.id
   }

   public getName() {
      return this.name
   }
   public getEmail() {
      return this.email
   }
   public getPassword() {
      return this.password
   }
   public getRole(){
      return this.role
  }
}