
console.log("temperature converter loaded!");
function convertToCelsius(fahrenheit){
    return(fahrenheit - 32) * (5 / 9);
}
function describeTemperature(fahrenheit){
    const celsius = convertToCelsius(fahrenheit);
    let description = "";

    if (celsius < 0 ){
        description = "It's freezing!";
    } else if (celsius <= 15){
        description = "It's cold.";
    }else if (celsius <= 25 ){
        description = "It's mild.";
    }else if (celsius <= 35){
        description = "It's warm.";
    } else {
        description = "It's hot!";
    }

    return `thats ${celsius.toFixed(2)}c.${description}`;
}
let input = prompt("Enter a temperature in fahrenheit:");
let fahrenheit = Number(input);

let message = describeTemperature(fahrenheit);
alert(message);


