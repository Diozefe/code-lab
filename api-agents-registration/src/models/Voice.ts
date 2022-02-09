export default abstract class Voice{
    
    constructor(
        public readonly min: number,
        public readonly max: number,
        public readonly selected: number,
        public readonly handleMode: string,
        public readonly device: string,
        public readonly devicePassword: string,
    ){}
}