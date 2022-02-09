let _id:string;

export function setCarrier(id:string):void{
    _id = id;
}

export function getCarrier():string{
    if(_id){
        return _id;
    }else{
        throw new Error(' O transportador esta vazio')
    }
}

export function clearCarrier():void{
    _id = undefined;
}