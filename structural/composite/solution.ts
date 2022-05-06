namespace CompositeSolution {
  abstract class Category {
    children: Category[] = [];
    parent: Category | null = null;
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    setParent(parent: Category | null) {
      this.parent = parent;
    }

    getParent(): Category | null {
      return this.parent;
    }

    isComposite(): boolean {
      return false;
    }

    abstract getName(): string;
  }

  class Product extends Category {
    getName(): string {
      return this.name;
    }
  }

  class CategoryComposite extends Category {
    constructor(name: string) {
      super(name);
    }

    add(category: Category) {
      this.children.push(category);
      category.setParent(this);
    }

    remove(category: Category): void {
      const index = this.children.indexOf(category);
      this.children.splice(index, 1);
      category.setParent(null);
    }

    isComposite(): boolean {
      return true;
    }

    getName(): string {
      return this.name;
    }
  }

  const category = new CategoryComposite("Category");

  const computer = new CategoryComposite("Computer");
  const fashion = new CategoryComposite("Fashion");

  const pc = new CategoryComposite("PC");
  const laptop = new CategoryComposite("Laptop");
  const casing = new CategoryComposite("Casing");
  const motherboard = new CategoryComposite("Motherboard");
  const peripheral = new CategoryComposite("Peripheral");
  const hdd = new CategoryComposite("HDD");

  category.add(computer);
  category.add(fashion);

  computer.add(pc);
  computer.add(laptop);
  computer.add(peripheral);

  pc.add(casing)
  pc.add(motherboard);

  peripheral.add(hdd);

  console.log(category);

  const print = (composite : Category) : void => {
      console.log(`kategori ` + composite.getName());

      composite.children.forEach(child => {
         if (child.isComposite() && child.children.length){
             print(child);
         } else {
             console.log('product ' + child.getName());
         }
      });
  }

  print(category);
}
