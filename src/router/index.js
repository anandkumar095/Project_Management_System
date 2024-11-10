import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/loginPage.vue'; // Your Login component
import Dashboard from '../components/StudentDashboard.vue'; // Your Dashboard component (optional)
import myteam from '../components/myTeam.vue';
import InboxPage from "../components/InboxPage.vue";

import InsDash from "@/views/InsDash.vue";
import ProjectGuidelines from "@/views/ProjectGuidelines.vue";
import MilestoneGuidelines from "@/views/MilestoneGuidelines.vue";
import ProjectList from "@/views/ProjectList.vue";
import DocumentReview from "@/views/DocumentReview.vue";
import AllStudents from "@/views/AllStudents.vue";

// Telling Vue to use Vue Router
Vue.use(VueRouter);

// Define routes
const routes = [
  { path: '/', component: Login }, // Login page at root
  { path: '/dashboard', component: Dashboard },
  { path: '/dashboard/myteam', component: myteam }, // Dashboard route (if created)
  { path: '/dashboard/inbox', component: InboxPage},
  {
    path: "/instructor/:id",
    name: "instructordashboard",
    component: InsDash,
  },
  {
    path: "/projectguidelines/:id",
    name: "projectguidelines",
    component: ProjectGuidelines,
  },
  {
    path: "/milestoneguidelines/:id",
    name: "milestoneguidelines",
    component: MilestoneGuidelines,
  },
  {
    path: "/projectlist/:id",
    name: "projectlist",
    component: ProjectList,
  },
  {
    path: "/documentreview/:id",
    name: "documentreview",
    component: DocumentReview,
  },
  {
    path: "/allstudents/:id",
    name: "allstudents",
    component: AllStudents,
  },
  {
    path: "/inbox",
    name: "inbox",
    component: InboxPage, // Add the InboxPage route
  },
];

// Create the router instance
const router = new VueRouter({
  mode: 'history', // Use history mode for cleaner URLs
  routes, // Assign the routes to the Vue Router instance
});

export default router;
