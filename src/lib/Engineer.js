class Engineer extends Employee {
  constructor({ name, id, email, github }) {
    super({ id, name, email });
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
  generateCard() {
    return `<div class="card my-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${this.id}</h6>
      <p class="card-text">Email: ${this.email}</p>
      <p class="card-text">Github: ${this.github}</p>
    </div>
  </div>`;
  }
}
module.exports = Engineer;
