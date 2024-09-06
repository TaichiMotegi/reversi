class Fraction {
  constructor(private _numerator: number, private _demoninator: number) {}

  toString(): string {
    return `${this._numerator}/${this._demoninator}`;
  }

  get numerator() {
    return this._numerator;
  }

  get demoninator() {
    return this._demoninator;
  }
}

const f1 = new Fraction(1, 2);
console.log(f1.numerator);
console.log(f1.demoninator);

const f2 = new Fraction(3, 4);
console.log(f2.toString());
