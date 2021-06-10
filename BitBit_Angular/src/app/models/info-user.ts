export class InfoUser {
    private _username: string;
    private _email: string;
    private _first_name: string;
    private _last_name: string;
    private _company: string;
    private _phone: string;
    private _city: string;

    constructor() {
        this._username="";
        this._email="";
        this._first_name="";
        this._last_name="";
        this._company="";
        this._city="";
    }
    get username() : string {
        return this._username;
    }
    set username(username: string) {
        this._username=username;
    }
    get email() : string {
        return this._email;
    }
    set email(email: string) {
        this._email=email;
    }
    get first_name() : string {
        return this._first_name;
    }
    set first_name(first_name: string) {
        this._first_name=first_name;
    }
    get last_name() : string {
        return this._last_name;
    }
    set last_name(last_name: string) {
        this._last_name=last_name;
    }
    get company() : string {
        return this._company;
    }
    set company(company: string) {
        this._company=company;
    }
    get phone() : string {
        return this._phone;
    }
    set phone(phone: string) {
        this._phone=phone;
    }
    get city() : string {
        return this._city;
    }
    set city(city: string) {
        this._city=city;
    }
}
