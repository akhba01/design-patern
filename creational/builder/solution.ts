namespace BuilderSolution {
  // cara pertama
  class User {
    public name: string = " ";
    public username: string = " ";
    public password: string = " ";
    public phone: string = "";
    public email: string = "";
    public age: number = 0;

    getDetails() {
      return `Name: ${this.name} \nUsername: ${this.username} \nPassword: ${this.password} \nEmail: ${this.email} \nPhone: ${this.phone}`;
    }
  }

  class UserBuilder {
    private user: User;

    constructor() {
      this.user = new User();
    }

    setName(name: string) {
      this.user.name = name;
      return this;
    }

    setUsername(username: string) {
      this.user.username = username;
      return this;
    }

    setPassword(password: string) {
      this.user.password = password;
      return this;
    }

    setEmail(email: string) {
      this.user.email = email;
      return this;
    }

    setPhone(phone: string) {
      this.user.phone = phone;
      return this;
    }

    setNumber(age: number) {
      this.user.age = age;
      return this;
    }

    build() {
      return this.user;
    }
  }

  const user1 = new UserBuilder()
    .setName("John")
    .setUsername("jdoe")
    .setPassword("password")
    .setEmail("aak@gmai")
    .setPhone("08123456789")
    .build();
  console.log(user1);
  console.log(user1.getDetails());

  // cara 2

  class User2 {
    public name: string;
    public username: string;
    public password: string;
    public phone: string;
    public email: string;
    public age: number;

    constructor({
      name = "",
      username = "",
      password = "",
      email = "",
      phone = "",
      age = 0,
    }) {
      this.name = name;
      this.username = username;
      this.password = password;
      this.email = email;
      this.phone = phone;
      this.age = age;
    }
    getDetails() {
      return `Name: ${this.name} \nUsername: ${this.username} \nPassword: ${this.password} \nEmail: ${this.email} \nPhone: ${this.phone}`;
    }
  }
  const user2 = new User2({
    name: "John",
    username: "jdoe",
    password: "password",
  });
  console.log(user2);
  console.log(user2.getDetails());
}
