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
   title:string,
   description: string,
   createDate: string,
   user_id: string
}