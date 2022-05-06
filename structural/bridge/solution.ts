/*
                    Store
    Product Type                                            Price

Fashion(price)   Computer(price)    Book(price)             Cheap Expensive */


// Solution:

interface Price {
    name: string;
    sellPrice(): string;
}

class Cheap implements Price {
    name: string = 'mahal';
    constructor(name: string) {
        this.name = name;
    }
    sellPrice() {
        return `jual ${this.name} dengan harga murah`;
    }

}

class Expensive implements Price {
    name: string = 'mahal';
    constructor(name: string) {
        this.name = name;
    }
    sellPrice() {
        return `jual ${this.name} dengan harga mahal`;
    }
}

interface IProduct {
    name: string;

}

abstract class Product implements IProduct {
    name: string;
    price: Price;
    constructor(name: string, price: Price) {
        this.name = name;
        this.price = price;
    }
    abstract sell(): any;
}

class Fashion extends Product {
    sell(): any {
        return `${this.name} ${this.price.sellPrice()}`
    }
}


class Computer extends Product {
    sell(): string {
        return `${this.name} ${this.price.sellPrice()}`
    }
}
//----------------------------------------------------------------------------------------------------------------------

const FashionMurah = new Fashion('Baju lengan panjang', new Cheap('Fashion'));
console.log(FashionMurah.sell());
const FashionMahal = new Fashion('Baju lengan pendek', new Expensive('Fashion'));
console.log(FashionMahal.sell());
const ComputerMurah = new Computer('Laptop', new Cheap('Computer'));
console.log(ComputerMurah.sell());
const ComputerMahal = new Computer('Desktop', new Expensive('Computer'));
console.log(ComputerMahal.sell());
const BookMurah = new Fashion('Buku', new Cheap('Book'));
console.log(BookMurah.sell());
const BookMahal = new Fashion('Komik', new Expensive('Book'));
console.log(BookMahal.sell());
