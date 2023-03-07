// @ts-ignore
let readlineSync = require('readline-sync');
// @ts-ignore
let clear = require('clear');
let id: number;

import {Account} from "./Account";
import {EmployeeManager} from "../Employee/EmployeeManager";
import {main} from "../main";
import {writtingAccount} from "../readingWriting";


export class AccountManager {
    accounts: Account[] = [];

    constructor() {
    }

    init(data: Account[]) {
        for (let i = 0; i < data.length; i++) this.accounts.push(data[i]);
    }
    findIndex(userName: string): number {
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i]["_userName"] === userName) return i;
        }
        return -1;
    }

    delete(userName: string): void {
        this.accounts.splice(this.findIndex(userName), 1);
    }

     showAccount(): void {
        clear();
         console.log(`
         -----In4 of this account-----
         UserName: ${this.accounts[id].userName}
         Password: ${this.accounts[id].password}
         `)
         let z = readlineSync.question('Press Enter to return !');
         main();
     }

     add(userName: string, password: string): void {
        let a: Account = new Account(userName, password);
        this.accounts.push(a);
     }

    signUp(): void {
        clear();
        console.log(`-----Sign up-----`)
        do {
            var userName: string = readlineSync.question('Enter UserName: ');
            if (this.findIndex(userName) !== -1) {
                console.log(`UserName đã tồn tại ! Xin mời nhập lại`);
            } else break;
        } while (true);

        do {
            var password1: string = readlineSync.question('Enter password: ');
            var password2: string = readlineSync.question('Re-enter password: ');
            if (password1 !== password2) {
                console.log(`Mật khẩu nhập lại không khớp`);
            } else break;
        } while (true);

        this.add(userName, password1);
        console.log(`Bạn đã đăng ký thành công !`);
        writtingAccount();
        this.login();
    }

    login() {
        clear();
        console.log(`-----Login-----`)
            var userName: string = readlineSync.question('UserName: ');
            var index: number = this.findIndex(userName);
            id = index;
            if (index === -1) {
                console.log("UserName không tồn tại");
                console.log(`Bạn có muốn đăng ký tài khoản mới không ?
                1. Cóoooooooooooo
                2. Đéo cầnnnnnnnn
                0. Trở lại
                `)
                do {
                    let i: number = +readlineSync.question('Your choice: ');
                    switch (i) {
                        case 1:
                            this.signUp();
                            break;
                        case 2:
                            this.login();
                            break;
                        case 0:
                            this.welcome();
                            break;
                        default:
                            console.log(`Lựa chọn không hợp lệ !`);
                            break;
                    }
                } while (true)
            }

        do {
            var password: string = readlineSync.question('Password: ');
            if (this.accounts[index]["_password"] === password) {
                console.log(`Xin chào ${userName}!`);
                main();
                break;
            } else {
                console.log(`Mật khẩu không đúng !`);
                console.log(`
                             1. Tạo tài khoản mới
                             2. Nhập lại mật khẩu
                             3. Đăng nhập bằng userName khác
                             0 Trở lại 
                `)
                let i: number = +readlineSync.question('Your choice: ');
                switch (i) {
                    case 1 :
                        this.signUp();
                        break;
                    case 2:
                        continue;
                    case 3:
                        this.login();
                        break;
                    default:
                        console.log(`Lựa chọn không hợp lệ`)
                }
            }
        } while (true)

    }



    welcome() {
        clear();
        console.log(`-----Welcome-----
    1. Đăng nhập
    2. Đăng ký
    0. Thoát
    `)
        do
        {
            let choose = +readlineSync.question(`Your choice: `);
            switch (choose) {
                case 1:
                    this.login();
                    break;
                case 2:
                    this.signUp();
                    break;
                case 0:
                    break;
                default:
                    console.log(`Lựa chọn không hợp lệ, xin chọn lại !!!`);
                    break;
            }
            if (choose === 0) break;
        } while (true);
    }

}