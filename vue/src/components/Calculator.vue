<template>
    <div class="p-3 mb-2  calculator">
        <h2> Converter</h2>
        <p>With this converter, different currencies can be converted into Bitcoin!</p>
        <input type="text" @keyup.enter="calculatetoBitcoin" v-model="amount"> 
        <select>
            <option>EUR</option>
            <option>USD</option>
            <option>AUD</option>
            <option>NZD</option>
            <option>GBP</option>
        </select>
         = <input type="text" v-model="result" > <span>BTC</span>
        
    </div>
</template>

<script>
export default {
    data (){
        return{
            amount: 0,
            result: 0
        }
    },
    methods: {
        calculatetoBitcoin(){
            this.result = this.amount * 1.3
        }
    }
}
</script>

<style scoped>
.calculator{
    background-color:lightsteelblue;
    text-align: center;
}
input{
    width: 200px;
    height: 70px;
    background-color: lightcyan;
    border: none;
    color: black;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    font-family: 'Segoe UI';
}
select{
    width: 100px;
    height: 70px;
    background-color: lightcyan;
    border: none;
    color: black;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    font-family: 'Segoe UI';
}
span{
    color: black;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    font-family: 'Segoe UI';
}
</style>