//today's temperature
const kelvin = prompt('What is the Kelvin temperature today?');
//convert kelvin to celsius
let celsius = kelvin - 273
//calculate fahrenheit
let fahrenheit = celsius * (9/5) + 32
//round fahrenheit temp value
fahrenheit = Math.floor(fahrenheit)
//log out result
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
