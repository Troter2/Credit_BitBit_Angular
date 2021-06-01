export class New {
    private _title: string;
    private _content: string;
    private _image: string;
    private _date: Date;

    constructor() {
        this._title = "";
    }
    
    get token(): string {
        return this._title;
    }
    set token(token: string) {
        this._title=token;
    }
    
    get content(): string {
        return this._content;
    }
    set content(content: string) {
        this._content=content;
    }
    
    get image(): string {
        return this._image;
    }
    set image(image: string) {
        this._image=image;
    }
    
    get date(): Date {
        return this._date;
    }
    set date(date: Date) {
        this._date=date;
    }
}
