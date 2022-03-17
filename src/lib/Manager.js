const Employee = require("./Employee");

class Manager extends Employee {
  constructor({ name, id, email, officeNumber }) {
    super({ name, id, email, officeNumber });
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
  generateCard() {
    return `<div class="card my-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${this.id}</h6>
      <p class="card-text">Email: ${this.email}</p>
      <p class="card-text">Office Number: ${this.officeNumber}</p>
    </div>
  </div>`;
  }
}

module.exports = Manager;
