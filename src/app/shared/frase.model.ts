export class Frase {
    public frasePt: string
    public fraseEng: string

    constructor(fraseEng: string, frasePt: string){
        this.frasePt = frasePt
        this.fraseEng = fraseEng
    }

    //poderia ser feito assim, para ficar menos "verboso"
    //constructor(public fraseEng: string, public frasePt:string){}
}