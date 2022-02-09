export class ApplicationError extends Error{

    private code:number;

    constructor(
        msg:string,
        code?:number,
    ){
        super(msg);
        this.code = code;
    }
}