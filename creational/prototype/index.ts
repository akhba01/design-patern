namespace PrototypePattern{
    class User {
        public name: string;
        public username: string
        public password: string;
        public phone: string;
        public email: string;
        
        constructor (name: string, username: string, password: string, email:string, phone: string) {
            this.name = name;
            this.username = username;
            this.password = password;
            this.email = email;
            this.phone = phone;
        }

        public clone(): this {
            const clone = Object.assign({}, this)
            return clone as this;    
        }
    
    }
    
    const user1 = new User('John Doe', 'jdoe', 'password', 'aak@gmai', '08123456789');
    const user2 = new User('John Smith', 'jsmith', 'password', 'example@email.com' , '08123456789');

    const user4 = user1.clone();
    user4.name = 'Jane Up';
    console.log(user4.name);    
    console.log(user4);

    const user5 = user2.clone();
    user5.name = 'Jane Down';
    console.log(user5.name);
}