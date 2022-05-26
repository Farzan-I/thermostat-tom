const Thermostat = require('./thermostat')

describe('thermostat', () => {
  const thermostat = new Thermostat();

  describe('getTemperature', () => {
    it('gets the temperature of the thermostat', () => {
      expect(thermostat.getTemperature()).toEqual(20);
    })
  })

  describe('up', () => {
    it('raises the temperature of the thermostat', () => {
      thermostat.up();
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(22);
    })

  })
})