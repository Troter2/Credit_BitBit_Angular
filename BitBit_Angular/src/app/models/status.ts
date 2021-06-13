export class Status {
    private _id: number;
    private _desc: string;


    constructor() {
        this._desc = "";
    }

    get id(): number {
        return this._id;
    }
    set id(id_inci: number)  {
        this._id = id_inci;
    }
    get desc(): string {
        return this._desc;
    }
    set desc(desc: string)  {
        this._desc = desc;
    }
}
