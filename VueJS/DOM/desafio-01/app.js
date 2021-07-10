new Vue({
    el: '#desafio',
    data: {
        nome: 'Mateus Marques',
        idade: 21,
        imagem: 'https://cdn.britannica.com/s:575x450/38/211838-004-9A4193CB.jpg'
    },
    methods: {
        randomNum(min, max) {
            return Math.random() * (max - min) + min;
        }
    }
})