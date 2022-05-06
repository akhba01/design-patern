class Product {
    name :string;
    price :number;

    constructor(name :string, price :number) {
        this.name = name;
        this.price = price;
    }

    getProduct () {
        return {
            name: this.name,
            price: this.price
        }
    }
}

const product = new Product('iPhone', 1000);
console.log(product.getProduct());

const productAFromImport = Object.assign(product.getProduct(), {tax : 1000});
productAFromImport.price += 2000;
console.log(productAFromImport);

const productAFromExport = Object.assign(product.getProduct(), {tax : 2000});
productAFromExport.price += 4000;
console.log(productAFromExport);