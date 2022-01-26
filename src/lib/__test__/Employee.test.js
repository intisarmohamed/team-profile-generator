const Employee = require("../Employee");

describe("Employee", () => {
  const testEmployee = new Employee({
    name: "Bob smith",
    id: "1",
    email: "bobsmith@gmail.com",
  });

  test("should be a employee", () => {
    const expected = "Employee";
    const actual = testEmployee.getRole();

    expect(actual).toEqual(expected);
  });

  test("should return the expected name", () => {
    const expected = testEmployee.name;
    const actual = testEmployee.getName();

    expect(actual).toEqual(expected);
  });

  test("should return the expected id", () => {
    const expected = testEmployee.id;
    const actual = testEmployee.getId();

    expect(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const expected = testEmployee.email;
    const actual = testEmployee.getEmail();

    expect(actual).toEqual(expected);
  });

  test("should return the expected role", () => {
    const expected = "Employee";
    const actual = testEmployee.getRole();

    expect(actual).toEqual(expected);
  });
});
