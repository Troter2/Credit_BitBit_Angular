import { Time } from "@angular/common";

export class Mail {

    private _from: string;
    private _to: string;
    private _about: string;
    private _content: string;

    constructor() {
        this._from = "";
        this._to = "";
        this._about = "";
        this._content = "";
    }

    get from(): string {
        return this._from;
    }
    set from(from: string) {
        this._from = from;
    }
    get to(): string {
        return this._to;
    }
    set to(to: string) {
        this._to = to;
    }
    get about(): string {
        return this._about;
    }
    set about(about: string) {
        this._about = about;
    }
    get content(): string {
        return this._content;
    }
    set content(content: string) {
        this._content = content;
    }
    
}