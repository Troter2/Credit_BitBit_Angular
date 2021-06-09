export class Inci {

    private _id_inci: number;
    private _desc: string;
    private _id_user_propietari: string;
    private _nom_propietari: string;
    private _marca: string;
    private _numero_serie: string;
    private _tlf: string;
    private _desc_averia: string;
    private _diagnosis_prev: string;
    private _uuid: string;
    private _entry_date: Date;
    private _out_date: Date;

    constructor() {
        this._desc = "";
        this._uuid = "";
        this._id_user_propietari = "";
        this._nom_propietari = "";
        this._marca = "";
        this._numero_serie = "";
        this._tlf = "";
        this._desc_averia = "";
        this._diagnosis_prev = "";
    }

    get id_inci(): number {
        return this._id_inci;
    }
    set id_inci(id_inci: number)  {
        this._id_inci = id_inci;
    }

    get desc(): string {
        return this._desc;
    }
    set desc(desc: string)  {
        this._desc = desc;
    }
    get uuid(): string {
        return this._uuid;
    }
    set uuid(uuid: string)  {
        this._uuid = uuid;
    }
    
    get id_user_propietari(): string {
        return this._id_user_propietari;
    }
    set id_user_propietari(id_user_propietari: string)  {
        this._id_user_propietari = id_user_propietari;
    }
    
    get nom_propietari(): string {
        return this._nom_propietari;
    }
    set nom_propietari(nom_propietari: string)  {
        this._nom_propietari = nom_propietari;
    }
    
    get marca(): string {
        return this._marca;
    }
    set marca(marca: string)  {
        this._marca = marca;
    }
    
    get numero_serie(): string {
        return this._numero_serie;
    }
    set numero_serie(numero_serie: string)  {
        this._numero_serie = numero_serie;
    }

    get tlf(): string {
        return this._tlf;
    }
    set tlf(tlf: string)  {
        this._tlf = tlf;
    }
    
    get desc_averia(): string {
        return this._desc_averia;
    }
    set desc_averia(desc_averia: string)  {
        this._desc_averia = desc_averia;
    }

    get diagnosis_prev(): string {
        return this._diagnosis_prev;
    }
    set diagnosis_prev(diagnosis_prev: string)  {
        this._diagnosis_prev = diagnosis_prev;
    }

    get entry_date(): Date {
        return this._entry_date;
    }
    set entry_date(entry_date: Date)  {
        this._entry_date = entry_date;
    }
    
    get out_date(): Date {
        return this._out_date;
    }
    set out_date(out_date: Date)  {
        this._out_date = out_date;
    }
}
