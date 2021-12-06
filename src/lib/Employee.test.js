const Employee = require("./Employee");
const employee = require("./Employee");
let employee = new employee("john", 01, "john@email.com");

describe("Employee", () => {
  test("should be an instance of employee", () => {
    expect(Employee).toBeInstanceOf(Employee);
  });

  test("should return the expected name", () => {
    expect(john.getName).toBe("John");
  });

  test("should return the expected id", () => {
    expect(john.getId).toBe(01);
  });

  test("should return the expected email", () => {
    expect(john.getEmail).toBe("John@email.com");
  });
  test("should return the expected role", () => {
    expect(john.getRole).toBe("Employee");
  });
});
