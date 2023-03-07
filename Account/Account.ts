export class Account {
    private _userName: string;
    private _password: string;

    constructor(userName: string, password: string) {
        this._userName = userName;
        this._password = password;
    }


    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}