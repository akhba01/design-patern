interface Logistic {
  qty: number;
  deliver(): void;
}
class Truck implements Logistic {
  public qty: number;

  constructor(qty: number) {
    this.qty = qty;
  }

  deliver(): void {
    console.log(`Delivering ${this.qty} tons of cargo`);
  }

  load(qty: number): void {
    this.qty += qty;
  }
}

class Ship {
  private qty: number;

  constructor(qty: number) {
    this.qty = qty;
  }

  deliver(): void {
    console.log(`Delivering ${this.qty} tons of cargo`);
  }

  load(qty: number): void {
    this.qty += qty;
  }
}

let type = "deliver_by_land";
if (type == "deliver_by_land") {
  let truck = new Truck(10);
} else if (type == "deliver_by_sea") {
  new Ship(100); // error
}
new Truck(100);
