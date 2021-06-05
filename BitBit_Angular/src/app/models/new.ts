export class New {
    private _id: string;
    private _title: string;
    private _content: string;
    private _image: string;
    private _date: Date;

    constructor() {
        this._id = "";
        this._title = "";
        this._content = "";
        this._image = "";
    }
    

    get id(): string {
        return this._id;
    }
    set id(id: string) {
        this._id=id;
    }

    get title(): string {
        return this._title;
    }
    set title(title: string) {
        this._title=title;
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
        this._image='http://localhost/Credit_BitBit_PHP/assets/uploads/files/'+image;
    }
    
    get date(): Date {
        return this._date;
    }
    set date(date: Date) {
        this._date=date;
    }
}
