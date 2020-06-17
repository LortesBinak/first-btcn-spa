<template>
    <div class="container-fullwidth homedash">
        <div style="display:block">
            <h2> Bitcoin Dashboard </h2>
            <span><button class="btn btn-outline-dark" @click="createDashboard">Show Dashboard</button></span>
        </div>
        <br>
        <div class=" table table-hover table-dark">
            <table class="table-striped table-hover tabledash">
                <thead class="thead-dark">
                    <tr class="bg-info">
                        <th>Currency</th>
                        <th>Purchasing Price</th>
                        <th>Selling Price</th>
                        <th>Most Recent Marketprice</th>
                        <th>Symbol</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(price, index) in prices" :key="index">
                        <td>{{price.x}}</td>
                        <td>{{price.buy}}</td>
                        <td>{{price.sell}}</td>
                        <td>{{price.last}}</td>
                        <td>{{price.symbol}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            testarray: [
                {marketprice:6650.3, symbol:'$'},
                {marketprice:9361.24, symbol:'€'},
                {marketprice:719334.11, symbol:'kr'}
            ],
            prices:[]
        }
    },
    methods:{
        createDashboard(){
            this.$http.get('https://blockchain.info/ticker')
            .then(response => {
                return response.json();
                
            })
            .then (data=> {
                const resultArray = [];
                console.log(data);
                for (let key in data){
                    let tmp = data[key]
                    tmp["x"] =key
                    resultArray.push(tmp);
                }
                this.prices = resultArray;
                console.log(this.prices );
            });
                
        }
    }
}
</script>

<style scoped>
.homedash{
    background-color:lightsteelblue;
    text-align: center;
}
.tabledash{
    margin: auto;
    width:100%;
}
</style>