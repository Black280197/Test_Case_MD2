// @ts-ignore
let readlineSync = require('readline-sync');
// @ts-ignore
let clear = require('clear');
// @ts-ignore
export const fs = require('fs');
import {dataAccount} from "./readingWriting";
import {dataEmployee} from "./readingWriting";

import {AccountManager} from "./Account/AccountManager";
import {EmployeeManager} from "./Employee/EmployeeManager";

import {readingAccount} from "./readingWriting";
import {readingEmployee} from "./readingWriting";

export function main() {
    clear();
        console.log(`               
                -----Menu-----
    
              1. Thêm nhân viên
              2. Tìm kiếm nhân viên
              3. Kiểm tra trạng thái nhân viên
              4. Sửa thông tin nhân viên
              5. Thay đổi trạng thái của nhân viên
              6. Thông tin tài khoản
              7. Đăng xuất
    `)
    do {
        let i = +readlineSync.question('Your choice: ');

            switch (i) {
                case 1:
                    employeeManager.add();
                    break;
                case 2:
                    employeeManager.searchEmployee();
                    break;
                case 3:
                    employeeManager.checkStatus();
                    break;
                case 4:
                    employeeManager.updateEmployeeInfor();
                    break;
                case 5:
                    employeeManager.updateEmployeeStatus();
                    break;
                case 6:
                    accountManager.showAccount();
                    break;
                case 7:
                    accountManager.welcome();
                    break;
                default:
                    console.log(`Lựa chọn không hợp lệ !`)
                    break;
            }
        } while (true)
    }

readingEmployee();
console.log(dataEmployee);
readingAccount();
console.log(dataAccount);

export let accountManager: AccountManager = new AccountManager;
// accountManager["accounts"] = dataAccount;
console.log(dataAccount[0])
accountManager.init(dataAccount);
console.log(`_________`)
console.log(accountManager.accounts[0]["_userName"]);

export let employeeManager: EmployeeManager = new EmployeeManager();
employeeManager.employees = dataEmployee;
clear();
accountManager.welcome();

