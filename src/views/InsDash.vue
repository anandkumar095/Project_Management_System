<template>
    <div>
      <NavBar />
  
      <div class="container">
        <h1>Instructor Dashboard</h1>
        <br>
        <h2>Project Overview</h2>
        <br>
        <table class="table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Progress</th>
              <th>Milestones</th>
              <th>Review Project</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in projects" :key="project.project_id">
              <td>{{ project.project_name }}</td>
              <td>{{ project.progress }}</td>
              <td>{{ project.milestones }}</td>
              <td>
                <button
                  @click="goProject(project.project_id, project.project_name)"
                  class="btn btn-primary mr-2"
                >
                  Review Project
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="mt-3 text-center">
        <button @click="goBack" class="btn btn-secondary">Back</button>
      </div>
      <br>
      <br>
      <h2> Recent Activities</h2>
    </div>
      </div>
     
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  export default {
    components: {
      NavBar,
    },
    data() {
      return {
        projects: [
           { id: 1, project_name: "Project Alpha", progress: 80, milestones: "8/10" },
           { id: 2, project_name: "Project Beta", progress: 60, milestones: "6/10" }, 
           { id: 3, project_name: "Project Gamma", progress: 90, milestones: "9/10" }, 
           { id: 4, project_name: "Project Delta", progress: 75, milestones: "7/10" }, ],
      };
    },
    created() {
     
    },
    methods: {
      
      goBack() {
        this.$router.go(-1);
      },
      goProject() {
        this.$router.push('/projectguidelines/1');
      },
      
    },
  };
  </script>
  
  <style></style>
  