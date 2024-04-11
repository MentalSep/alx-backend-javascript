import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  CloneCar() {
    return new EVCar(this._brand, this._motor, this._color, this._range);
  }
}
