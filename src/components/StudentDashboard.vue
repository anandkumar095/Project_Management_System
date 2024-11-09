<template>
  <div class="container mt-5">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <a class="navbar-brand" href="#">IITM Student Project Tracker</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" @click="goToDashboard">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="goToMyTeam">My Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Inbox</a>
          </li>
        </ul>
        <button class="btn btn-outline-danger my-2 my-sm-0" @click="logout">Logout</button>
      </div>
    </nav>
    <div class="card mb-4">
      <div class="card-header">
        Project Submissions
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="submission in submissions" :key="submission.id">
              <td>{{ submission.date }}</td>
              <td>{{ submission.title }}</td>
              <td>{{ submission.status }}</td>
              <td>{{ submission.feedback }}</td>
              <td>
                <button class="btn btn-primary btn-sm" @click="upload(submission)">Upload</button>
                <button class="btn btn-secondary btn-sm" @click="view(submission)">View</button>
                <button class="btn btn-warning btn-sm" @click="review(submission)">Review</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        Progress
      </div>
      <div class="card-body">
        <div class="progress">
          <div class="progress-bar" role="progressbar" :style="{ width: progress + '%' }">
            {{ progress }}%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submissions: [
        { id: 1, date: '1/9/2024', title: 'Milestone 1', status: 'Completed', feedback: '⭐⭐⭐⭐⭐' },
        { id: 2, date: '15/9/2024', title: 'Milestone 2', status: 'Pending', feedback: '-' },
        { id: 3, date: '30/9/2024', title: 'Milestone 3', status: 'Pending', feedback: '-' },
      ],
      progress: 30, // Hardcoded progress value
    };
  },
  methods: {
    logout() {
      this.$router.push('/');
    },
    upload(submission) {
      alert(`Upload clicked for ${submission.title}`);
    },
    view(submission) {
      alert(`View clicked for ${submission.title}`);
    },
    review(submission) {
      alert(`Review clicked for ${submission.title}`);
    },
    goToMyTeam(){
      this.$router.push('/dashboard/myteam');
    },
    goToDashboard(){
      this.$router.push('/dashboard');
    }
  },
};
</script>

<style scoped>
.container {
  background-color: #e0f7e9;
}

.navbar-brand {
  font-weight: bold;
}

.progress-bar {
  background-color: #4caf50;
}
</style>
