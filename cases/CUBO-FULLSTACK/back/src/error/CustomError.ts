export class CustomError extends Error{
    constructor(
        public statusCode: number,
        messege: string
    ){
        super(messege)
    }
}