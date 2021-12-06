const Engineer = require("./Engineer");
let john=new Engineer("john",01,"john@email.com","github")

describe("Engineer", () => {
  test("should be an instance of engineer", () => {
    expect(Engineer).toBeInstanceOf(Engineer);
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

  test("should return the expected github", ()
   => {
     expect(john.getGithub).toBe("github");
   });

  test("should return the expected role", () => {
    expect(john.getRole).toBe("Engineer");
  });
});