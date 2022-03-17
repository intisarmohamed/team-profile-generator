const Manager = require("../Manager");

describe("Manager", () => {
  const testManager = new Manager({
    name: "bob smith",
    id: "1",
    email: "bobsmith@gmail.com",
    officeNumber: "12345",
  });

  test("should be a manager", () => {
    const expected = "Manager";
    const actual = testManager.getRole();

    expect(actual).toEqual(expected);
  });

  test("should return the expected name", () => {
    const expected = testManager.name;
    const actual = testManager.getName();

    expect(actual).toEqual(expected);
  });

  test("should return the expected id", () => {
    const expected = testManager.id;
    const actual = testManager.getId();

    expect(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const expected = testManager.email;
    const actual = testManager.getEmail();

    expect(actual).toEqual(expected);
  });

  test("should return the expected office number", () => {
    const expected = testManager.officeNumber;
    const actual = testManager.getOfficeNumber();

    expect(actual).toEqual(expected);
  });

  test("should return the expected role", () => {
    const expected = "Manager";
    const actual = testManager.getRole();

    expect(actual).toEqual(expected);
  });
});
