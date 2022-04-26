enum ComputerType {
  Desktop = "Desktop",
  Laptop = "Laptop",
}

abstract class Computer {
  protected type: ComputerType;
  protected monitor: string;

  constructor(type: ComputerType, monitor: string) {
    this.type = type;
    this.monitor = monitor;
  }

  public abstract getType(): string;
}

class PC extends Computer {
  constructor(monitor: string) {
    super(ComputerType.Desktop, monitor);
  }

  getType(): string {
    return `${this.type} dengan ${this.monitor}`;
  }
}

class Laptop extends Computer {
  constructor(monitor: string) {
    super(ComputerType.Laptop, monitor);
  }

  getType(): string {
    return `${this.type} dengan ${this.monitor}`;
  }
}

enum MonitorType {
  LED = "led",
  IPS = "ips",
}

class LEDComputerFactory {
  static buildComputer(type: ComputerType): Computer {
    switch (type) {
      case ComputerType.Desktop:
        return new PC(MonitorType.LED);
      case ComputerType.Laptop:
        return new Laptop(MonitorType.LED);
      default:
        throw new Error("Computer type not supported");
    }
  }
}

class IPSComputerFactory {
  static buildComputer(type: ComputerType): Computer {
    switch (type) {
      case ComputerType.Desktop:
        return new PC(MonitorType.IPS);
      case ComputerType.Laptop:
        return new Laptop(MonitorType.IPS);
      default:
        throw new Error("Computer type not supported");
    }
  }
}

class ComputerFactory {
  static buildComputer(ComputerType: ComputerType, monitorType: MonitorType): Computer {
    switch (monitorType) {
      case MonitorType.LED:
        return LEDComputerFactory.buildComputer(ComputerType);
      case MonitorType.IPS :
        return IPSComputerFactory.buildComputer(ComputerType);
      default:
        throw new Error("Computer type not supported");
    }
  }
}

// Computer / Laptop
// Computer / IPS / LED
// Laptop / Server

const pcled = ComputerFactory.buildComputer(ComputerType.Desktop, MonitorType.IPS);
console.log(pcled.getType());

const pclaptop = ComputerFactory.buildComputer(ComputerType.Laptop, MonitorType.LED);
console.log(pclaptop.getType());

const Desktop = ComputerFactory.buildComputer(ComputerType.Desktop, MonitorType.LED);
console.log(Desktop.getType());

const laptop = ComputerFactory.buildComputer(ComputerType.Laptop, MonitorType.IPS);
console.log(laptop.getType());