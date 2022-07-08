import { authenticationData } from "../types/authData"

export enum POST_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'EVENT'
 }

export default class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: POST_ROLES,
        private create_at: string,
        private autor_id: string
    ) { }
    
    public getId() {
        return this.id
    }

    public getPhoto() {
        return this.photo
    }
    public getDescription() {
        return this.description
    }

    public getType() {
        return this.type
    }

    public getCreateAt() {
        return this.create_at
    }

    public getAutorId() {
        return this.autor_id
    }
}