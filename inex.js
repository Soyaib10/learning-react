function operate(multiplication, x, y) {
    return multiplication(x, y)
}

const multiplication = (a, b) => a * b
console.log(operate(multiplication, 4, 5))