import { temperatureConverter } from "./temperature-converter";

describe("Temperature Converter", () => {
    describe("when calling celsiusToFahrenheit method", () => { 
        it("converts Celsius to Fahrenheit", () => { 
            expect(temperatureConverter().celsiusToFahrenheit(0)).toBe(32);
            expect(temperatureConverter().celsiusToFahrenheit(100)).toBe(212);
        });
    });

    describe("when calling fahrenheitToCelsius method", () => {
        it("converts Fahrenheit to Celsius", () => {
            expect(temperatureConverter().fahrenheitToCelsius(32)).toBeCloseTo(0);
            expect(temperatureConverter().fahrenheitToCelsius(212)).toBeCloseTo(100);
        });
    });

    describe("when calling celsiusToKelvin method", () => {
        it("converts Celsius to Kelvin", () => {
            expect(temperatureConverter().celsiusToKelvin(0)).toBeCloseTo(273.15);
            expect(temperatureConverter().celsiusToKelvin(-273.15)).toBeCloseTo(0);
        });
    });

    describe("when calling kelvinToCelsius method", () => {
        it("converts Kelvin to Celsius", () => {
            expect(temperatureConverter().kelvinToCelsius(273.15)).toBeCloseTo(0);
            expect(temperatureConverter().kelvinToCelsius(0)).toBeCloseTo(-273.15);
        });
    });

    describe("when calling fahrenheitToKelvin method", () => {
        it("converts Fahrenheit to Kelvin", () => {
            expect(temperatureConverter().fahrenheitToKelvin(32)).toBeCloseTo(273.15);
            expect(temperatureConverter().fahrenheitToKelvin(-459.67)).toBeCloseTo(0);
        });
    });

    describe("when calling kelvinToFahrenheit method", () => {
        it("converts Kelvin to Fahrenheit", () => {
            expect(temperatureConverter().kelvinToFahrenheit(273.15)).toBeCloseTo(32);
            expect(temperatureConverter().kelvinToFahrenheit(0)).toBeCloseTo(-459.67);
        });
    });
});
