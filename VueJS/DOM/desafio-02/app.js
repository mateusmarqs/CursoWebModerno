new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertar() {
            alert('Alertei')
        },
        armazenar(event) {
            this.valor = event.target.value
        },
    }
})