export default class AuthError extends Error{
    constructor(){
        super('Usuário não autenticado');
    }
    
}