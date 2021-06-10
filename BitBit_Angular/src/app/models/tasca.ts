export class Tasca {

    private _id_tasca: number;
    private _id_inci: number;
    private _id_user: number;
    private _status: string;
    private _desc: string;
    private _accions: string;
    private _start_date: Date;
    private _end_date: Date;
    private _canvas: string;
    private _marca: string;


    constructor() {
        this._desc = "";
        this._accions = "";
        this._status = "";
        this._canvas = "";
    }

    get id_inci(): number {
        return this._id_inci;
    }
    set id_inci(id_inci: number)  {
        this._id_inci = id_inci;
    }


    get id_user(): number {
        return this._id_user;
    }
    set id_user(id_user: number)  {
        this._id_user = id_user;
    }


    get id_tasca(): number {
        return this._id_tasca;
    }
    set id_tasca(id_tasca: number)  {
        this._id_tasca = id_tasca;
    }



    get desc(): string {
        return this._desc;
    }
    set desc(desc: string)  {
        this._desc = desc;
    }

    get status(): string {
        return this._status;
    }
    set status(status: string)  {
        this._status = status;
    }
    
    get accions(): string {
        return this._accions;
    }
    set accions(accions: string)  {
        this._accions = accions;
    }
    
    get start_date(): Date {
        return this._start_date;
    }
    set start_date(start_date: Date)  {
        this._start_date = start_date;
    }
    
    get end_date(): Date {
        return this._end_date;
    }
    set end_date(end_date: Date)  {
        this._end_date = end_date;
    }
    
    get canvas(): string {
        return this._canvas;
    }
    set canvas(canvas: string)  {
        this._canvas = canvas;
    }

    get marca(): string {
        return this._marca;
    }
    set marca(marca: string)  {
        this._marca = marca;
    }
}
