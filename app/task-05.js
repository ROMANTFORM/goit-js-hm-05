
class Car {
  
  constructor({
    speed = 0,
    price = 20000,
    maxSpeed = 200,
    isOn = true,
    distance = 0,
    }) {
      this._speed = speed;
      this._price = price;
      this._maxSpeed = maxSpeed;
      this._isOn = isOn;
      this._distance = distance;
    }

  static getSpecs(car) {
    console.log(`speed: ${car._speed}, max speed: ${car._maxSpeed}, price: ${car._price}, isOn: ${car._isOn}, distance: ${car._distance}`);
  }

  get price() {
      return this._price;
    }

  set price(value) {
      return this._price = value;
    }

  turnOn() {
      this._isOn = true;
    }

  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }

  accelerate(value) {
    let newSpeed = this._speed += value;
    this._speed = newSpeed < this._maxSpeed ? newSpeed : this._maxSpeed;
   }

  decelerate(value) {
     let lowerSpeed = this._speed -= value;
    this._speed = lowerSpeed > 0 ? lowerSpeed : 0;
   }

  drive(hours) {
    if(this._isOn) {
      this._distance += hours * this._speed;
    }
  }
}


  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  console.log(mustang);
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000