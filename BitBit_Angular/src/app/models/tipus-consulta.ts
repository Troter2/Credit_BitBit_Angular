export class TipusConsulta {
    private _consulta: string;
    private _id: number;

    constructor() {
        this._consulta = "";
    }
    get consulta(): string {
        return this._consulta;
    }
    set consulta(consulta: string) {
        this._consulta = consulta;
    }
    get id(): number {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }
}
