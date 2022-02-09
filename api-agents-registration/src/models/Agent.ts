import Medias from "./Medias";

export default class Agent{
    constructor(
        public id: string,
        public name: string,
        public login: string,
        public medias: Medias,
        public domain: string,
    ){}
}