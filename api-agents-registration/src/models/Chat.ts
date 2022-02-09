export default abstract class Chat{
    
    constructor(
        public readonly min: number,
        public readonly max: number,
        public readonly selected: number,
        public readonly handleMode: string
    ){}
}