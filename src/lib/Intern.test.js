const Intern = require("./Intern");
let john=new Intern("john",01,"john@email.com","school",);

describe("Intern", () => {
  test("should be an instance of Intern", () => {
    expect(Intern).toBeInstanceOf(Intern);
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

  test("should return the expected school", ()
   => {
     expect(john.getSchool).toBe("school");
   });

  test("should return the expected role", () => {
    expect(john.getRole).toBe("Intern");
  });
});