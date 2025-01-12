import { createRouter, createWebHistory } from 'vue-router';
import LoadingScreen from '../components/LoadingScreen.vue';
import LoadingData from '../components/LoadingData.vue';
import blank from "../components/blank.vue";
import DriverLogin from "../components/Login.vue";
import LoadUserData from "../components/LoadingUserData.vue";
import CompanySelect from "../components/companySelect.vue";

const routes = [
  {
    path: '/',
    name: 'LoadingScreen',
    component: LoadingScreen,
  },
  {
    path: '/blank',
    name: 'blank',
    component: blank,
  },
  {
    path: '/loading-data',
    name: 'LoadingData',
    component: LoadingData,
  },
  {
    path: '/DriverLogin',
    name: 'DriverLogin',  // Make sure this name matches the component's name
    component: DriverLogin, // Ensure it's the correct imported component
  },
  {
    path: '/LoadUserData',
    name: 'LoadUserData',  // Make sure this name matches the component's name
    component: LoadUserData, // Ensure it's the correct imported component
  },
  {
    path: '/CompanySelect',
    name: 'CompanySelect',
    component: CompanySelect,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;