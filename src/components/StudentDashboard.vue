<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light mb-4">
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
            <a class="nav-link" @click="goToInbox">Inbox</a>
          </li>
        </ul>
        <button class="btn btn-outline-light my-2 my-sm-0 ml-auto" @click="logout">Logout</button>
      </div>
    </nav>
    <div class="main-content">
      <div class="card mb-4 shadow-lg">
        <div class="card-header">
          Project Submissions
        </div>
        <div class="card-body">
          <table class="table table-striped">
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
                <td>
                  <span v-for="n in 5" :key="n" class="star" :class="n <= submission.stars ? 'filled' : ''">★</span>
                </td>
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
      <div class="card shadow-lg">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      submissions: [
        { id: 1, date: '1/9/2024', title: 'Milestone 1', status: 'Completed', stars: 5 },
        { id: 2, date: '15/9/2024', title: 'Milestone 2', status: 'Pending', stars: 3 },
        { id: 3, date: '30/9/2024', title: 'Milestone 3', status: 'Pending', stars: 4 },
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
    goToMyTeam() {
      this.$router.push('/dashboard/myteam');
    },
    goToDashboard() {
      this.$router.push('/dashboard');
    },
    goToInbox() {
      this.$router.push('/dashboard/inbox');
    },
  },
};
</script>

<style scoped>
/* Full-Page Coverage */
html, body {
  height: 100%;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container-fluid {
  padding: 0;
  height: 100%;
  background: linear-gradient(135deg, #e0f7fa, #ffffff); /* Soft light cyan to white gradient */
}

.main-content {
  padding: 30px;
  margin-top: 20px;
}

/* Navbar Styling */
.navbar {
  background-color: #85c1e9; /* Lighter blue */
  padding: 15px 20px;
  border-radius: 10px;
}

.navbar-brand {
  font-weight: bold;
  color: #ffffff; /* White text */
}

.navbar-nav .nav-link {
  color: #ffffff; /* White text for nav links */
  font-weight: 500;
}

.navbar-nav .nav-link:hover {
  color: #ffcc00; /* Bright yellow for hover */
}

.navbar .btn-outline-light {
  color: #ffffff; /* White text */
  border-color: #ffffff; /* White border */
}

.navbar .btn-outline-light:hover {
  background-color: #ffffff;
  color: #007bff;
}

.navbar-collapse {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-nav {
  display: flex;
  gap: 15px;
}

.navbar-nav .nav-item {
  padding: 0 10px;
}

/* Card Styling */
.card {
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border: none;
  margin-bottom: 30px;
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-10px); /* Hover effect to lift the card */
}

.card-header {
  background-color: #85c1e9; /* Lighter blue */
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 10px 10px 0 0;
}

.card-body {
  padding: 25px;
  background-color: #fafafa;
}

/* Table Styling */
.table {
  width: 100%;
  margin-bottom: 20px;
  background-color: #ffffff;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f3f9f7; /* Soft pastel for odd rows */
}

.table th {
  background-color: #85c1e9; /* Lighter blue */
  color: white;
  font-weight: bold;
}

.table td {
  color: #333; /* Dark text */
}

/* Star Rating Styling */
.star {
  font-size: 20px;
  color: #bdbdbd; /* Light grey by default */
}

.star.filled {
  color: #000000; /* Black for filled stars */
}

/* Button Styling Inside Table */
.btn-sm {
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 25px;
  transition: transform 0.2s ease;
}

.btn-sm:hover {
  transform: scale(1.1); /* Slight scale on hover */
}

.btn-primary {
  background-color: #85c1e9; /* Lighter blue */
  border: none;
  color: white;
}

.btn-primary:hover {
  background-color: #4da6d6; /* Slightly darker blue */
}

.btn-secondary {
  background-color: #ffcc00; /* Bright yellow */
  border: none;
  color: white;
}

.btn-secondary:hover {
  background-color: #ffb300; /* Darker yellow */
}

.btn-warning {
  background-color: #ff9800; /* Orange */
  border: none;
  color: white;
}

.btn-warning:hover {
  background-color: #fb8c00; /* Darker orange */
}

/* Progress Bar Styling */
.progress {
  height: 20px;
  background-color: #e8f5e9; /* Light pastel green */
  border-radius: 10px;
}

.progress-bar {
  background-color: #66bb6a; /* Soft green */
  text-align: center;
  color: white;
  border-radius: 10px;
}

/* Responsive Design */
@media (max-width: 767px) {
  .navbar-collapse {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-nav {
    width: 100%;
    justify-content: space-evenly;
  }

  .card-header {
    font-size: 1rem;
  }
}
</style>
