export const temperatureConverter = () => {
    const celsiusToFahrenheit = (celsius: number): number => {
        return (celsius * 9 / 5) + 32;
    };

    const fahrenheitToCelsius = (fahrenheit: number): number => {
        return (fahrenheit - 32) * 5 / 9;
    };

    const celsiusToKelvin = (celsius: number): number => {
        return celsius + 273.15;
    };

    const kelvinToCelsius = (kelvin: number): number => {
        return kelvin - 273.15;
    };

    const fahrenheitToKelvin = (fahrenheit: number): number => {
        const celsius = fahrenheitToCelsius(fahrenheit);
        return celsiusToKelvin(celsius);
    };

    const kelvinToFahrenheit = (kelvin: number): number => {
        const celsius = kelvinToCelsius(kelvin);
        return celsiusToFahrenheit(celsius);
    };

    return {
        celsiusToFahrenheit,
        fahrenheitToCelsius,
        celsiusToKelvin,
        kelvinToCelsius,
        fahrenheitToKelvin,
        kelvinToFahrenheit
    };
};
