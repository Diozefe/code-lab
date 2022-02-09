export default abstract class Email{

    constructor(
        public readonly min:number,
        public readonly max:number,
        public readonly selected: number
    ){}
}