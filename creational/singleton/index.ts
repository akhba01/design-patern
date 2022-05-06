class Me {
    private firstname : string = '';
    private lastname : string = '';


    get FullName() : string {
        // acces db, select user ...
        this.firstname = 'Jane';
        this.lastname = 'Doe';

        return `${this.firstname} ${this.lastname}`;
    }
}

const fullName = new Me()
console.log(fullName.FullName);

const fullName2 = new Me()
console.log(fullName2.FullName);

// object fullName and fullName2 are the different instances of the class Me
console.log(fullName === fullName2); //false


