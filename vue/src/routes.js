
import HomeDashboard from './components/HomeDashboard.vue';
import DetailView from './components/DetailView.vue';
import Calculator from './components/Calculator.vue';

export const routes = [
    { path: '/', component: HomeDashboard},
    { path: '/detail', component: DetailView},
    { path: '/calculator', component: Calculator}
];