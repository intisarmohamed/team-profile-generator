const Engineer = require("../Engineer");

describe("Engineer", () => {
  const testEngineer = new Engineer({
    name: "bob smith",
    id: "1",
    email: "bobsmith@gmail.com",
    github: "bobsmith123",
  });
  test("should be a engineer", () => {
    const expected = "Engineer";
    const actual = testEngineer.getRole();

    expect(actual).toEqual(expected);
  });

  test("should return the expected name", () => {
    const expected = testEngineer.name;
    const actual = testEngineer.getName();

    expect(actual).toEqual(expected);
  });

  test("should return the expected id", () => {
    const expected = testEngineer.id;
    const actual = testEngineer.getId();

    expect(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const expected = testEngineer.email;
    const actual = testEngineer.getEmail();

    expect(actual).toEqual(expected);
  });

  test("should return the expected github", () => {
    const expected = testEngineer.github;
    const actual = testEngineer.getGithub();

    expect(actual).toEqual(expected);
  });

  test("should return the expected role", () => {
    const expected = "Engineer";
    const actual = testEngineer.getRole();

    expect(actual).toEqual(expected);
  });
});
