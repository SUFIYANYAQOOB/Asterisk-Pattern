// var userValue = +prompt("Insert your value");
// function printNumberTriangle(userValue) {
//     var pattern = '';
//     for (var i = 1; i <= userValue; i++) {
//       for (var j = 1; j <= i; j++) {
//         pattern += j + ' ';
//       }
//       pattern += '\n'; 
//     }
//     document.write(pattern);
//   }
  
//   printNumberTriangle(userValue);
  


        
    var userValue = +prompt("Enter the value:");
    var asteriskValue = prompt("Enter the value:");

    // Function to print the number pattern
    function printNumberPattern(value) {
    var result = '';
    for (var i = 1; i <= value; i++) {
    for (var j = 1; j <= i; j++) {
        result += j + ' ';
    }
    result += '<br>';
    }
    document.getElementById('numberPattern').innerHTML = result;
    }

    // Function to print the asterisk pattern
    function printAsteriskPattern(value) {
        var result = '';
        for (var i = 1; i <= value; i++) {
        for (var j = 1; j <= i; j++) {
        result += '* ';
    }
        result += '<br>';
    }
        document.getElementById('asteriskPattern').innerHTML = result;
    }

    // Call the functions with user inputs
    printNumberPattern(userValue);
    printAsteriskPattern(asteriskValue);
    
