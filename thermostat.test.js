const Thermostat = require('./thermostat')

describe('thermostat', () => {
  const thermostat = new Thermostat();

  describe('getTemperature', () => {
    it('gets the temperature of the thermostat', () => {
      const thermostat = new Thermostat();
      expect(thermostat.getTemperature()).toEqual(20);
    })
  })

  describe('up', () => {
    it('raises the temperature of the thermostat', () => {
      const thermostat = new Thermostat();
      thermostat.up();
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(22);
    })
  })

  describe('down', () => {
    it('lowers the temperature of the thermostat', () => {
      const thermostat = new Thermostat();
      thermostat.down();
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(18);
    })
    it('does not allow the temperature to go lower than 10', () => {
      const thermostat = new Thermostat();
      for (let i = 0 ; i < 20 ; i++) {
        thermostat.down();
      }
      expect(thermostat.getTemperature()).toEqual(10)
    })
  })
})
