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

console.log(fullName === fullName2);

