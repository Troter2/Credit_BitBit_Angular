export class About {
    private _titol: string;
    private _content: string;
    private _date: Date;

    constructor() {
        this._titol = "";
    }
    get titol(): string {
        return this._titol;
    }
    set titol(titol: string) {
        this._titol=titol;
    }

    get content(): string {
        return this._content;
    }
    set content(content: string) {
        this._content=content;
    }
    get date(): Date {
        return this._date;
    }
    set date(date: Date) {
        this._date=date;
    }
    
}
