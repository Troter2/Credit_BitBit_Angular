export class Consulta {

    private _id_consulta: number;
    private _nom: string;
    private _email: string;
    private _assumpte: string;
    private _content: string;
    private _date: Date;

    constructor() {
        this._nom = "";
        this._email = "";
        this._assumpte = "";
        this._content = "";
    }

    get content(): string {
        return this._content;
    }
    set content(content: string) {
        this._content = content;
    }
    get assumpte(): string {
        return this._assumpte;
    }
    set assumpte(assumpte: string) {
        this._assumpte = assumpte;
    }
    get email(): string {
        return this._email;
    }
    set email(email: string) {
        this._email = email;
    }
    get nom(): string {
        return this._nom;
    }
    set nom(nom: string) {
        this._nom = nom;
    }
    get date(): Date {
        return this._date;
    }
    set date(date: Date) {
        this._date = date;
    }
    get id_consulta(): number {
        return this._id_consulta;
    }
    set id_consulta(id_consulta: number) {
        this._id_consulta = id_consulta;
    }
}
