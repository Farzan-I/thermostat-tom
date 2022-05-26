const Thermostat = require('./thermostat')

describe('thermostat', () => {
  const thermostat = new Thermostat();

  describe('getTemoerature', () => {
    it('gets the temperature of the thermostat', () => {
      expect(thermostat.getTemperature()).toEqual(20);
    })
  })
})