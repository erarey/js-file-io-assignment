'use strict'

const fs = require('fs')

class Employee {

  constructor (name, title, salary) {
    this.name = name
    this.title = title
    this.salary = salary
  };

  /*
  static parseFromFilePath (path) {
    let content
    content = fs.readFileSync(path)
    const parsedData = JSON.parse(content)
    return new Employee(parsedData.name, parsedData.title, parsedData.salary)
  };
  */

  promote (title, salary) {
    this.title = title
    this.salary = salary
  };
}

Employee.parseFromFilePath = (path) => {
  let content
  content = fs.readFileSync(path)
  const parsedData = JSON.parse(content)
  return new Employee(parsedData.name, parsedData.title, parsedData.salary)
}

module.exports = {
  Employee
}
