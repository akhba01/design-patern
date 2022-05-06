// name     |   type   | desc
// -------- | -------- | ------------------------------------
// bicycle   |   func   |
// car       |   func   |
// driver    |   func   |

interface BaseData {
  getData(): {
    name: string;
    type: string;
  };
}

interface IProduct extends BaseData {
  name: string;
  type: string;
}

interface IMaterial {
  name: string;
  qty: number;
}

class Product implements IProduct {
  name: string;
  type: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  getData(): {
    name: string;
    type: string;
  } {
    return {
      name: this.name,
      type: this.type,
    };
  }
}


class Material implements IMaterial {
  name: string;
  qty: number;

  constructor(name: string, qty: number) {
    this.name = name;
    this.qty = qty;
  }

  getData() {
      return{
          name : this.name,
          qty : this.qty
      }
  }
}


let list : any[] = [];

const product = new Product('Bicycle', 'Vehicle');
list.push(product.getData());

const material = new Material('Steel', 10);
list.push(material.getData());

const material2 = new Material('Wood', 20);
list.push(material2.getData());


console.log(list);

// ---------------------------------------------------------------

class MaterialAdapter implements BaseData {
  private adaptee : Material;

  constructor(adapter : Material) {
      this.adaptee = adapter;
  }

  getData() {
        return {
            name : this.adaptee.name,
            type : ''
        }
  }
}

let list2 : any[] = [];

const product2 = new Product('Bicycle', 'Vehicle');
list2.push(product2.getData());

const material3 = new MaterialAdapter(new Material('Steel', 10));
list2.push(material3.getData());

const material4 = new MaterialAdapter(new Material('Wood', 20));
list2.push(material4.getData());


console.log(list2);

// cara ke 2 :

enum AdapterType {
    PRODUCT,
    MATERIAL
}

class DataAdapter implements BaseData {
    public name : string;
    public type : string;
    public qty : number;
    public tipe : AdapterType;


    constructor( { name = '', type = '', qty = 0} = {}, tipe : AdapterType ) {
        this.name = name;
        this.type = type;
        this.qty = qty;
        this.tipe = tipe;
    }

    getData()  {
        if (this.tipe == AdapterType.PRODUCT) {
          const product = new Product(this.name, this.type);
            return {
                name : product.name,
                type : product.type
            }
        }  else if (this.tipe == AdapterType.MATERIAL) {
            const material = new Material(this.name, this.qty);
            return {
                name : material.name,
                type : ''
            }
        return {
                name : '', type : ''}
    }

}


let list3 : any[] = [];

const data1 = new DataAdapter({name : 'Bicycle', type : 'Vehicle'}, AdapterType.PRODUCT);
list3.push(data1.getData());

const data2 = new DataAdapter({name : 'Steel', qty : 10}, AdapterType.MATERIAL);
list3.push(data2.getData());

const data3 = new DataAdapter({name : 'Wood', qty : 20}, AdapterType.PRODUCT);
list3.push(data3.getData());

console.log(list3);