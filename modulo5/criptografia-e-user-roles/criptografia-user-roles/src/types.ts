export enum UserRole {
   ADMIN = "ADMIN",
   NORMAL = "NORMAL"
}

export type user = {
   id: string
   email: string
   password: string
   role: UserRole
}

export type AuthenticationData = {
   id: string,
   role: UserRole
 }