
function calc() {

    const input1 = document.getElementById('number1').value
    const input2 = document.getElementById('number2').value

    if (input1 && !isNaN(input1) && input2 && !isNaN(input2)) {

        const number1 = parseFloat(input1)
        const number2 = parseFloat(input2)
        const result = document.getElementById('result')
        const operation = document.getElementById('operators').value;

        if (operation === '+') {
            result.value = Math.round(number1 + number2);
        }
        else if (operation === '-') {
            result.value = Math.round(number1 - number2);
        }
       else if (operation === '/') {
            result.value = Math.round(number1 / number2);
        }
       else if (operation === 'X') {
            result.value = Math.round(number1 * number2);
        }

    }
    else {
        alert('input correct numbers')
    }
}