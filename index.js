new Vue({
    el: "#app",
    data: {
        number1: 0,
        number2: 0,
        result: 0
    },
    methods: {
        addition: function() {
            return this.result = Number(parseInt(this.number1) + parseInt(this.number2));
        },
        subtraction: function() {
            return this.result = Number(this.number1 - this.number2);
        },
        multiplication: function() {
            return this.result = Number(this.number1 * this.number2);
        },
        division: function() {
            if (this.number1 == 0 || this.number2 == 0) {
                return this.result = 0;
            } else {
                return this.result = Math.round(Number(parseInt(this.number1) / parseInt(this.number2)));
            }
        },
        reset: function() {
            this.result = 0;
            this.number1 = 0;
            this.number2 = 0;
        }
    }
});