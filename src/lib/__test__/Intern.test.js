const Intern = require("../Intern");

describe("Intern", () => {
  const testIntern = new Intern({
    name: "bob smith",
    id: "1",
    email: "bobsmith@gmail.com",
    school: "school",
  });
  test("should be an intern", () => {
    const expected = "Intern";
    const actual = testIntern.getRole();

    expect(actual).toEqual(expected);
  });
  test("should return the expected name", () => {
    const expected = testIntern.name;
    const actual = testIntern.getName();

    expect(actual).toEqual(expected);
  });

  test("should return the expected id", () => {
    const expected = testIntern.id;
    const actual = testIntern.getId();

    expect(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const expected = testIntern.email;
    const actual = testIntern.getEmail();

    expect(actual).toEqual(expected);
  });
  test("should return the expected school", () => {
    const expected = testIntern.school;
    const actual = testIntern.getSchool();

    expect(actual).toEqual(expected);
  });
});
