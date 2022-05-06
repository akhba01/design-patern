/*
Computer 
    PC
        Case
        Motherboard
        Processor
        RAM
    Laptop
        Asus ROG
    Periperal
    

        */

class Category {
  name: string;
  children: any[] = [];

  constructor(name: string) {
    this.name = name;
  }
}

const computer = new Category("Computer");
console.log(computer);

computer.children = [
  (new Category("PC").children = [
    new Category("Case"),
    new Category("Motherboard"),
  ]),
  (new Category("Laptop").children = [new Category("Asus")]),
];

console.log(computer);
