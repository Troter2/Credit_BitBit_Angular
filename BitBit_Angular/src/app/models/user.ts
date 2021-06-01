export class User {
    private _token: string;

    constructor() {
        this._token="";
    }
    get token() : string {
        return this._token;
    }
    set token(token: string) {
        this._token=token;
    }
}
