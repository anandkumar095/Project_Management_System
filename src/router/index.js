// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/loginPage.vue';  // Your Login component
import Dashboard from '../components/StudentDashboard.vue'; // Your Dashboard component (optional)
import myteam from '../components/myTeam.vue';

// Telling Vue to use Vue Router
Vue.use(VueRouter);

// Define routes
const routes = [
  { path: '/', component: Login },  // Login page at root
  { path: '/dashboard', component: Dashboard },
  {path:'/dashboard/myteam',component:myteam}  // Dashboard route (if created)
];

// Create the router instance
const router = new VueRouter({
  routes  // Assign the routes to the Vue Router instance
});

export default router;
