namespace SingletonSolution {
  class Me {
    private static instance: Me;
    private firstname: string = "";
    private lastname: string = "";

    public static getInstance(): Me {
      if (!Me.instance) {
        Me.instance = new Me();
      }
      return Me.instance;
    }

    get FullName(): string {
      // acces db, select user ...
      this.firstname = "Jane";
      this.lastname = "Doe";

      return `${this.firstname} ${this.lastname}`;
    }
  }

  const fullName = Me.getInstance();
  console.log(fullName.FullName);

  const fullName2 = Me.getInstance();
  console.log(fullName2.FullName);

  // object fullName and fullName2 are the same instance of the class Me
  console.log(fullName === fullName2); //true
}
