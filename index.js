

function globCall(){
    return calc();
}

function calc(){
    let firstInput = Number(prompt("Enter first number",))
    let operation = prompt("Enter the operation you like to perform like ( +,  *,  -,  / )")
    let secondInput = Number(prompt("Enter second number",))

    if(isNaN(firstInput && secondInput)){
        alert("Invalid!!! Input a valid number")
        globCall();
    }

    if (operation === '+'){
        alert(firstInput + secondInput);
    }
    else if (operation === '*'){
        alert(firstInput * secondInput);
    }
    else if (operation === '-'){
        alert(firstInput - secondInput);
    }
    else if (operation === '/'){
        alert(firstInput / secondInput);
    }
    else{
        alert("Enter a valid operation ( +,  *,  -,  / )");
        globCall();
    }
}

calc();