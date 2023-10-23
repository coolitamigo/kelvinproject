// Setting the original temperature in kelvin which will be adjusted.
const kelvin = 293;
// The same temperature in celsius is 273 degrees lower.
var celsius = kelvin - 273;
// The following line will run the equation to convert celsius to fahrenheit.
var fahrenheit = celsius * (9/5) + 32;
// This calculation often results in a decimal. This will round it down.
fahrenheit = Math.floor(fahrenheit);
// Extra practice: add Newton
var newton = celsius * (33/100);
newton = Math.floor(newton);

console.log('The temp in kelvin = ' + kelvin);
console.log('When we convert that to Celsius we get = ' + celsius);
console.log('Now we convert that to Fahrenheit = ' + fahrenheit);
console.log('And that temperature in Newton = ' + newton);
