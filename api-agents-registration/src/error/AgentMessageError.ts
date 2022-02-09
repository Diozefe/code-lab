export default class AgentMessageError extends Error{
    
    public readonly exists:string;
    public readonly notFound:string;
    public readonly notData:string;
    public readonly voidField:string;
    
    constructor(message?:string){
        super('O agente não foi criado');
        if(message){
            super(message);
        }
        this.exists = 'O agente já existe';
        this.notFound = 'O agente não foi encontrado';
        this.notData = 'Nenhum dado foi retornado';
        this.voidField = 'O campo passado está vazio';
    }
}