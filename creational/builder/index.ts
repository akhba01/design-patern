class User {
    private name: string;
    private username: string
    private password: string;
    private phone: string;
    private email: string;
    
    constructor (name: string, username: string, password: string, email:string, phone: string) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }

}

const user1 = new User('John Doe', 'jdoe', 'password', 'aak@gmai', '08123456789');
const user2 = new User('Jane Doe', 'jdoe', 'password', 'aaa@gmai', '08123456789');
const user3 = new User('John Smith', 'jsmith', 'password', '@email' , '08123456789');