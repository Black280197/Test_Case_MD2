
import {employeeManager} from "./main";
import {accountManager} from "./main";
import {fs} from "./main";

import {EmployeeManager} from "./Employee/EmployeeManager";
import {AccountManager} from "./Account/AccountManager";

import {Account} from "./Account/Account";
import {Employee} from "./Employee/Employee";

export let dataEmployee: Employee[] ;
export let dataAccount: Array<Account>;


export function writtingEmployee(): void {
    const content = JSON.stringify(employeeManager.employees);
    try {
        fs.writeFileSync('./dataEmployee.txt', content);
        // file written successfully
    } catch (err) {
        console.error(err);
    }
}

export function writtingAccount(): void {
    const content = JSON.stringify(accountManager.accounts);
    try {
        fs.writeFileSync('./dataAccount.txt', content);
        // file written successfully
    } catch (err) {
        console.error(err);
    }
}

export function readingEmployee(): void {
    try {
        const data = fs.readFileSync('./dataEmployee.txt', 'utf8');
        dataEmployee = JSON.parse(data);
    } catch (err) {
        console.error(err);
    }
}

export function readingAccount(): void {
    try {
        const data = fs.readFileSync('./dataAccount.txt', 'utf8');
        dataAccount = JSON.parse(data);
    } catch (err) {
        console.error(err);
    }
}