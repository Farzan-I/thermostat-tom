class Thermostat {
  constructor(){
    this.temp = 20;
    this.mode = true;
  }

  getTemperature() {
    return this.temp;
  }

  up(){
    if (this.mode === true) {
      if (this.temp >= 25) {
        this.temp = 25;
      } else {
        this.temp += 1;
      }
    } else {
      if (this.temp >= 32) {
        this.temp = 32;
      } else {
        this.temp += 1;
      }
    }
  }

  down(){
    if (this.temp <= 10) {
      this.temp = 10;
    } else {
      this.temp -= 1;
    }
  }

  setPowerSavingMode(bool) {
    this.mode = bool
  }
}



module.exports = Thermostat;