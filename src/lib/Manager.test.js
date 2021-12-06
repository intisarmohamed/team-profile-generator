const Manager = require("./Manager");
const manager=require("./Manager");
let john=new manager("john",01,"john@email.com",123456789,)

describe("Manager", () => {
  test("should be an instance of Manager", () => {
    expect(manager).toBeInstanceOf(Manager);
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

  test("should return the expected office number", ()
   => {
     expect(john.getOfficeNumber).toBe(123456789);
   });

  test("should return the expected role", () => {
    expect(john.getRole).toBe("Manager");
  });
});


