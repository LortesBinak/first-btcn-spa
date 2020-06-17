<template>
  <div class="container-fullwidth">
    <app-header></app-header>
      <!--<router-view> Leider gibt es aktuell im Routing der einzelnen Websites noch einen Bug--> 
            <app-dashboard></app-dashboard>
            <hr>
            <app-detail></app-detail>
            <hr>
            <app-calculator></app-calculator>
      <!--</router-view> -->
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Dashboard from './components/HomeDashboard.vue';
  import Detail from './components/DetailView.vue';
  import Calculator from './components/Calculator.vue';

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      appHeader: Header,
      appFooter: Footer,
      appDashboard: Dashboard,
      appDetail: Detail,
      appCalculator: Calculator,
    }
  }
</script>

<style>
 div {

   padding: 5px;
 }
</style>
