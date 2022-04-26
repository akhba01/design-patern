namespace FactorySolution {
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

  class Ship implements Logistic {
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

  type LogisticType = {
    type: string;
    qty: number;
  };

  interface Factory {
    create(options: LogisticType): Logistic;
  }

  class LogisticFactory implements Factory {
    public create(options: LogisticType): Logistic {
      if (options.type == "deliver_by_land") {
        return new Truck(options.qty);
      } else if (options.type == "deliver_by_sea") {
        return new Ship(options.qty);
      }

      throw new Error(`Unknown type ${options.type}`);
    }
  }

  const Logistic = new LogisticFactory();

  const byLand = Logistic.create({ type: "deliver_by_land", qty: 10 });
  console.log(byLand.deliver());

  const bySea = Logistic.create({ type: "deliver_by_sea", qty: 100 });
  console.log(bySea.deliver());
}
