function Company(empno,empname,empstatus) {
    this.empno = empno;
    this.empname = empname;
    this.empstatus = empstatus;
}

Company.prototype.increment = function () {
    this.empno++
}

Company.prototype.printMe = function () {
    console.log(`The updated Code is ${this.empno}`);
}

const emp1 = new Company(22,"vandana",true)
// console.log(Company.prototype);
// console.log(Object.getPrototypeOf(emp1));
emp1.increment()
emp1.printMe()
