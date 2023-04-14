function funA(a, b) {
    return function funB(c) {
        return a + b + c
    }
}

// Gọi function lần lượt
data = funA(3,4)
console.log(data)
console.log(data(5))

console.log(funA(4,5)(6))