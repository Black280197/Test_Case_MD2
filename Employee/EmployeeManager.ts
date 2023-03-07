import {Employee} from "./Employee";
import {writtingEmployee} from "../readingWriting";
// @ts-ignore
let readlineSync = require('readline-sync');
// @ts-ignore
let clear = require('clear');

import {type} from "./Employee";
import {main} from "../main";

interface list {
    on: Array<Employee>;
    off: Array<Employee>;
}

export class EmployeeManager {
    employees: Employee[] = [];

    constructor() {
    }

    findIndex(name: string): number {
        for (let i: number = 0; i < this.employees.length; i++) {
            if (this.employees[i].name === name) return i
        }
        return -1;
    }

    checkStatus(): void {
        clear();
        let name: string = readlineSync.question('Check by name: ');
        let i: number = this.findIndex(name);
        if (i === -1) {
            console.log(`Tên nhân viên không tồn tại !
            `)
            let z = readlineSync.question('Press Enter to return !');
            main();
        } else if (this.employees[i].status) {
                clear();
                console.log(`Nhân viên ${name} đang làm việc !`)
                let z = readlineSync.question('Press Enter to return !');
                main();
            } else {
            clear();
            console.log(`Nhân viên ${name} đã nghỉ việc !`)
            let z = readlineSync.question('Press Enter to return !');
            main();
        }

    }

    /*delete(name: string): void {
        this.employees.splice(this.findIndex(name), 1);
    }*/

    listWithStatus(): list {
        let l: list = {on:[], off:[]};
        for (let i: number = 0; i < this.employees.length; i++) {
            if (this.employees[i].status = true) l.on.push(this.employees[i])
            else l.off.push(this.employees[i]);
        }
        return l;
    }

    add(): void {
        clear();
        var typeOfStaff: type = {
            type: "",
            parttime: {salary: 0, hour: 0},
            fulltime: {salary: 0, hour: 0},
        };
        let name: string = readlineSync.question(`Employee's name: `);
        let email: string = readlineSync.question(`Email: `);
        let birthday: string = readlineSync.question(`Birthday: `);
        let phoneNumber: string = readlineSync.question(`phoneNumber: `);
        let status: boolean;
        console.log(`
        Trạng thái nhân viên:
        1. Nghỉ làm
        2. Đang làm việc       
        `)
        do {
            let s = +readlineSync.question(`Your choice:`);
            switch (s) {
                case 1:
                    status = false;
                    break;
                case 2:
                    status = true;
                    break;
                default:
                    console.log(`Lựa chọn không hợp lệ ! Hãy chọn lại !`);
                    continue;
            }
            break;
        } while (true);

        do {
            console.log(`
        Nhân viên này là kiểu:
        1. Parttime
        2. Fulltime
        `)
            let i = +readlineSync.question('Your chose: ');
            switch (i) {
                case 1:
                    typeOfStaff.type = "parttime";
                    typeOfStaff.parttime.salary = +readlineSync.question('Salary: ');
                    typeOfStaff.parttime.hour = 0;
                    typeOfStaff.fulltime.salary = -1;
                    typeOfStaff.fulltime.hour = -1;
                    break;
                case 2:
                    typeOfStaff.type = "fulltime";
                    typeOfStaff.fulltime.salary = +readlineSync.question('Salary: ');
                    typeOfStaff.fulltime.hour = 0;
                    typeOfStaff.parttime.salary = -1;
                    typeOfStaff.parttime.hour = -1;
                    break;
                default:
                    console.log(`Lựa chọn không hợp lệ ! Vui lòng chọn lại !`);
                    continue;
            }
            break;
        } while (true);

        let employee: Employee = new Employee(name, email, birthday, phoneNumber, status, typeOfStaff);
        this.employees.push(employee);
        console.log(`Thêm nhân viên mới thành công`);
        writtingEmployee();
        let z = readlineSync.question('Press Enter to return Menu!')
        main();
    }

    searchEmployee(): void {
        clear();
        let name: string = readlineSync.question('Search by name: ')
        let i = this.findIndex(name);
        if (i === -1) {
            console.log(`Tên nhân viên không tồn tại`);
            let z = readlineSync.question('Press Enter to return !');
            main();
        } else {
            clear();
            console.log(`
            -----Search by name-----
            Name: ${this.employees[i].name};
            Email: ${this.employees[i].email};
            Birthday: ${this.employees[i].birthday};
            phoneNumber: ${this.employees[i].phoneNumber};
            Status: ${this.employees[i].status};
            Type: ${this.employees[i].typeOfStaff.type};
            Salary: ${(this.employees[i].typeOfStaff.type === "fulltime") ? this.employees[i].typeOfStaff.fulltime.salary : this.employees[i].typeOfStaff.parttime.salary};
            ${(this.employees[i].typeOfStaff.type === "fulltime") ? "Overtime hours: " : "Working hours: "}` +
            `${(this.employees[i].typeOfStaff.type === "fulltime") ? this.employees[i].typeOfStaff.fulltime.hour : this.employees[i].typeOfStaff.parttime.hour};
            `)
            let z = readlineSync.question('Press Enter to return !');
            main();
        }
    }

    updateEmployeeInfor(): void {
        clear();
        let name = readlineSync.question(`Employee's name: `);
        let i: number = this.findIndex(name);
        if (i === -1) {
            console.log('Tên nhân viên không tồn tại !');
            let z = readlineSync.question('Press Enter to return !');
            main();
        } else {
            console.log(`
            -----Update-----
            !!!Chọn nội dung mà bạn muốn cập nhật!!!
            1. Name
            2. Email
            3. Birthday
            4. PhoneNumber
            5. Type
            7. Salary
            8. Working(Overtime) hours
            0. Trở lại
            `)
            do {
                let c: number = +readlineSync.question('Your choice: ');
                switch (c) {
                    case 1:
                        this.changeInfoString('name', i);
                        break;
                    case 2:
                        this.changeInfoString('email', i);
                        break;
                    case 3:
                        this.changeInfoString('birthday', i);
                        break;
                    case 4:
                        this.changeInfoString('phoneNumber', i);
                        break;
                    case 5:
                        this.changeInfoString('type', i);
                        break;
                    case 6:
                        this.changeInfoString('salary', i);
                        break;
                    case 7:
                        this.changeInfoString('hour', i);
                        break;
                    case 8:
                        this.changeInfoString('email', i);
                        break;
                    case 0:
                        main();
                        break;
                    default:
                        console.log('Lựa chọn không hợp lệ !')
                        break;
                }
            } while (true);
        }
    }

    changeInfoString(title: string, index: number): void {
        clear();
        let content: string = readlineSync.question(`New ${title}: `);
        switch (title) {
            case 'name':
                this.employees[index].name = content;
                break;
            case 'email':
                this.employees[index].email = content;
                break;
            case 'birthday':
                this.employees[index].birthday = content;
                break;
            case 'phoneNumber':
                this.employees[index].phoneNumber = content;
                break;
            case 'type':
                this.employees[index].typeOfStaff.type = content;
                console.log(`Hãy cập nhật lại lương và giờ làm(giờ làm thêm) của nhân viên !`);
                switch (content) {
                    case 'parttime':
                        let value1: number = readlineSync.question('Salary: ');
                        this.employees[index].typeOfStaff.parttime.salary = value1;
                        value1 = readlineSync.question('Hour: ');
                        this.employees[index].typeOfStaff.parttime.hour = value1;
                        break;
                    case 'fulltime':
                        let value2: number = readlineSync.question('Salary: ');
                        this.employees[index].typeOfStaff.fulltime.salary = value2;
                        value2 = readlineSync.question('Hour: ');
                        this.employees[index].typeOfStaff.fulltime.hour = value2;
                        break;
                }
                break;
            case 'salary':
                switch (this.employees[index].typeOfStaff.type) {
                    case 'parttime':
                        let value1: number = +content;
                        this.employees[index].typeOfStaff.parttime.salary = value1;
                        break;
                    case 'fulltime':
                        let value2: number = +content;
                        this.employees[index].typeOfStaff.fulltime.salary = value2;
                        break;
                }
            case 'hour':
                switch (this.employees[index].typeOfStaff.type) {
                    case 'parttime':
                        let value1: number = +content;
                        this.employees[index].typeOfStaff.parttime.hour = value1;
                        break;
                    case 'fulltime':
                        let value2: number = +content;
                        this.employees[index].typeOfStaff.fulltime.hour = value2;
                        break;
                }

        }
        console.log(`Đã cập nhật ${title} thành công !`)
        let z = readlineSync.question('Press Enter to return !')
        main();
    }

    updateEmployeeStatus(): void {
        let name: string = readlineSync.question(`Employee's name: `);
        let index: number = this.findIndex(name);
        this.employees[index]["status"] = !this.employees[index]["status"];
        console.log(`Đã thay đổi trạng thái của nhân viên`);
        let z = readlineSync.question('Press Enter to return !');
        main();
    }
}