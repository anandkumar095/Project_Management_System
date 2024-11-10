<template>
  <div class="container-fluid min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary shadow-lg">
      <a class="navbar-brand text-white font-weight-bold" href="#">IITM Student Project Tracker</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-white" @click="goToDashboard">Dashboard</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link text-white" @click="goToMyTeam">My Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" @click="goToInbox">Inbox</a>
          </li>
        </ul>
        <!-- Logout Button -->
        <div class="ml-auto">
          <button class="btn btn-outline-light my-2 my-sm-0 rounded-pill" @click="logout">LOGOUT</button>
        </div>
      </div>
    </nav>

    <!-- Team Details Section -->
    <div class="card mb-4 shadow-lg">
      <div class="card-header bg-primary text-white rounded-top">
        Team Details
      </div>
      <div class="card-body">
        <table class="table table-bordered table-striped">
          <thead class="thead-light">
            <tr>
              <th>Name</th>
              <th>Email-ID</th>
              <th>Meetings Attended</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in teamMembers" :key="member.name">
              <td>{{ member.name }}</td>
              <td>{{ member.email }}</td>
              <td>{{ member.meetingsAttended }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Meetings Section -->
    <div class="card shadow-lg">
      <div class="card-header bg-primary text-white rounded-top">
        Meetings
      </div>
      <div class="card-body">
        <table class="table table-bordered table-striped">
          <thead class="thead-light">
            <tr>
              <th>Date</th>
              <th>Attendees</th>
              <th>Action</th>
              <th>MOM</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="meeting in meetings" :key="meeting.date">
              <td>{{ meeting.date }}</td>
              <td>{{ meeting.attendees }}</td>
              <td>
                <button class="btn btn-danger btn-sm rounded-pill" @click="deleteMeeting(meeting)">DELETE</button>
                <button class="btn btn-secondary btn-sm rounded-pill" @click="updateMeeting(meeting)">UPDATE</button>
              </td>
              <td>
                <button class="btn btn-primary btn-sm rounded-pill" v-if="meeting.mom === 'VIEW'" @click="viewMOM(meeting)">VIEW</button>
                <span v-else>-</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        { name: 'Asma Iqbal', email: '21f1001894@ds.study.iitm.ac.in', meetingsAttended: '2/2' },
        { name: 'Syed Affan Daimi', email: '21f1001906@ds.study.iitm.ac.in', meetingsAttended: '2/2' },
        { name: 'Sumit Gangwani', email: '21f1002645@ds.study.iitm.ac.in', meetingsAttended: '1/2' },
        { name: 'Anand Kumar', email: '21f1005236@ds.study.iitm.ac.in', meetingsAttended: '1/2' },
        { name: 'G Raghul', email: '21f2001093@ds.study.iitm.ac.in', meetingsAttended: '2/2' },
        { name: 'Padmaja Sharma', email: '21f3021898@ds.study.iitm.ac.in', meetingsAttended: '1/2' },
        { name: 'Amreen Parveen', email: '21f1006805@ds.study.iitm.ac.in', meetingsAttended: '1/2' },
      ],
      meetings: [
        { date: '1/10/2024', attendees: 'Asma Iqbal,Syed Affan Daimi,Sumit Gangwani,Anand Kumar,G Raghul,Padmaja Sharma,Amreen Parveen', mom: 'VIEW' },
        { date: '5/10/2024', attendees: 'Asma Iqbal,Syed Affan Daimi,Sumit Gangwani,Anand Kumar,G Raghul,Padmaja Sharma,Amreen Parveen', mom: 'VIEW' },
      ],
    };
  },
  methods: {
    goToDashboard() {
      this.$router.push('/dashboard');
    },
    goToMyTeam() {
      this.$router.push('/dashboard/myteam');
    },
    logout() {
      this.$router.push('/');
    },
    deleteMeeting(meeting) {
      alert(`DELETE clicked for meeting on ${meeting.date}`);
    },
    updateMeeting(meeting) {
      alert(`UPDATE clicked for meeting on ${meeting.date}`);
    },
    viewMOM(meeting) {
      alert(`VIEW MOM clicked for meeting on ${meeting.date}`);
    },
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: #e0f7e9; /* Soft mint green */
  padding: 20px;
}

.navbar {
  border-radius: 10px;
  background-color: #007bff; /* Blue navbar */
}

.navbar-brand {
  font-weight: bold;
  color: white;
}

.navbar-nav .nav-link {
  color: white;
  font-weight: 500;
}

.navbar-nav .nav-link:hover {
  color: #ffcc00; /* Hover effect */
}

.navbar-toggler-icon {
  background-color: white;
}

.notification-bell {
  position: relative;
}

.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 0.75em;
  background-color: #ff4747;
}

.card {
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.card-header {
  background-color: #007bff; /* Blue header */
  color: white;
  font-weight: bold;
  border-radius: 10px 10px 0 0;
}

.card-body {
  padding: 20px;
}

.table {
  width: 100%;
}

.table th, .table td {
  text-align: center;
  padding: 12px;
  vertical-align: middle;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f8f9fa;
}

.table th {
  background-color: #007bff;
  color: white;
}

.table .btn {
  border-radius: 20px;
  padding: 6px 15px;
}

.table .btn-sm {
  font-size: 13px;
}

.btn-danger {
  background-color: #ff4747;
  border: none;
}

.btn-danger:hover {
  background-color: #ff2a2a;
}

.btn-secondary {
  background-color: #6c757d;
  border: none;
}

.btn-secondary:hover {
  background-color: #5a6368;
}

.btn-primary {
  background-color: #007bff;
  border: none;
}

.btn-primary:hover {
  background-color: #0069d9;
}

/* For rounded-pill buttons */
.rounded-pill {
  border-radius: 50px;
}

/* Hover effects for the cards */
.card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
</style>
