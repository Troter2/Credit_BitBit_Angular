export class User {
    private _token: string;
    private _group: string;

    constructor() {
        this._token="";
        this._group="";
    }
    get token() : string {
        return this._token;
    }
    set token(token: string) {
        this._token=token;
    }
    get group() : string {
        return this._group;
    }
    set group(group: string) {
        this._group=group;
    }
}
