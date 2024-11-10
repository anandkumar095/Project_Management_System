<template>
  <div class="container">
    <NavBar />
    <div class="text-center mt-4">
      <h1>Document Guidelines</h1>
      <p>View and upload project guidelines</p>
      <button class="btn btn-primary mb-3" @click="uploadGuidelines">Upload New Guidelines</button>

      <h3>Uploaded Guidelines</h3>

      <div class="d-flex justify-content-center mb-3">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search guidelines"
          class="form-control me-2"
          style="max-width: 300px;"
        />
        <select v-model="selectedProject" class="form-select" style="max-width: 200px;">
          <option v-for="project in projects" :key="project.id" :value="project.id">
            {{ project.name }}
          </option>
        </select>
        <button class="btn btn-success ms-2">NEW</button>
      </div>

      <div v-if="filteredGuidelines.length" class="list-group">
        <div
          v-for="(guideline) in filteredGuidelines"
          :key="guideline.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>{{ guideline.name }}</span>
          <div>
            <button @click="viewGuideline(guideline)" class="btn btn-info btn-sm me-2">View</button>
            <button @click="deleteGuideline(guideline.id)" class="btn btn-danger btn-sm">Delete</button>
          </div>
        </div>
      </div>
      <p v-else>No guidelines found for the selected project.</p>

      <div class="mt-3 text-center">
        <button @click="goBack" class="btn btn-secondary">Back</button>
      </div>
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
      searchQuery: "",
      selectedProject: null,
      projects: [],
    };
  },
  computed: {
    filteredGuidelines() {
      const selectedProject = this.projects.find(
        (project) => project.id === this.selectedProject
      );
      if (!selectedProject) return [];
      return selectedProject.guidelines.filter((g) =>
        g.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    uploadGuidelines() {
      alert("Upload New Guidelines functionality is not yet implemented.");
    },
    viewGuideline(guideline) {
      alert(`Viewing ${guideline.name}`);
    },
    deleteGuideline(guidelineId) {
      const projectIndex = this.projects.findIndex(
        (project) => project.id === this.selectedProject
      );
      if (projectIndex === -1) return;
      const guidelineIndex = this.projects[projectIndex].guidelines.findIndex(
        (g) => g.id === guidelineId
      );
      if (guidelineIndex !== -1) {
        this.projects[projectIndex].guidelines.splice(guidelineIndex, 1);
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  mounted() {
    if (this.projects.length > 0) {
      this.selectedProject = this.projects[0].id;
    }
  },
};
</script>

<style></style>
