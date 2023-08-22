export abstract class ApplyDiscount {
  constructor(protected readonly discout: number) {}

  abstract apply(value: number): number;
}

export class PercentDiscount extends ApplyDiscount {
  constructor(protected readonly discout: number) {
    super(discout);
  }

  public apply(value: number) {
    return value - value * this.discout;
  }
}
