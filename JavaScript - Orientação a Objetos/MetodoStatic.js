class Calculadora {
    soma(a, b) {
        console.log(a + b)
    }

    static sub(a, b) {          //static serve para esse método ser utilizado fora da classe
        console.log(a - b)
    }
}

// Calculadora.soma(20, 20)
Calculadora.sub(31, 20)