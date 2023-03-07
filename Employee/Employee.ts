type parttime = {salary: number, hour: number};
type fulltime = {salary: number, hour: number};

export type type = {
    type: string;
    parttime: parttime;
    fulltime: fulltime;
}

export class Employee {
    private _name: string;
    private _email: string;
    private _birthday: string;
    private _phoneNumber: string;
    private _status: boolean;
    private _typeOfStaff: type;

    constructor(name: string,
                email: string,
                birthday: string,
                phoneNumber: string,
                status: boolean = true,
                typeOfStaff: type) {
        this._name = name;
        this._email = email;
        this._birthday = birthday;
        this._phoneNumber = phoneNumber;
        this._status = status;
        this._typeOfStaff = typeOfStaff;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get birthday(): string {
        return this._birthday;
    }

    set birthday(value: string) {
        this._birthday = value;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }

    get typeOfStaff(): type {
        return this._typeOfStaff;
    }

    set typeOfStaff(value: type) {
        this._typeOfStaff = value;
    }
}