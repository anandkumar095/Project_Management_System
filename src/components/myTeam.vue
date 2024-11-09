<template>
  <div class="container mt-5">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <a class="navbar-brand" href="#">IITM Student Project Tracker</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" @click="goToDashboard">Dashboard</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" @click="goToMyTeam" >My Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Inbox</a>
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-danger my-2 my-sm-0 mr-3" @click="logout">LOGOUT</button>
          <div class="notification-bell position-relative">
            <i class="fas fa-bell"></i>
            <span class="badge badge-danger position-absolute">5</span>
          </div>
        </div>
      </div>
    </nav>
    <div class="card mb-4">
      <div class="card-header">
        Team Details
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item" v-for="member in teamMembers" :key="member.name">
            <strong>Name:</strong> {{ member.name }}, 
            <strong>Email-ID:</strong> {{ member.email }}, 
            <strong>Meetings Attended:</strong> {{ member.meetingsAttended }}
          </li>
        </ul>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        Meetings
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
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
                <button class="btn btn-danger btn-sm" @click="deleteMeeting(meeting)">DELETE</button>
                <button class="btn btn-secondary btn-sm" @click="updateMeeting(meeting)">UPDATE</button>
              </td>
              <td>
                <button class="btn btn-primary btn-sm" v-if="meeting.mom === 'VIEW'" @click="viewMOM(meeting)">VIEW</button>
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
        {name:'Sumit Gangwani', email: '21f1002645@ds.study.iitm.ac.in', meetingsAttended: '1/2'},
        {name:'Anand Kumar', email: '21f1005236@ds.study.iitm.ac.in', meetingsAttended: '1/2'},
        {name:'G Raghul', email: '21f2001093@ds.study.iitm.ac.in', meetingsAttended: '2/2'},
        {name:'Padmaja Sharma', email: '21f3021898@ds.study.iitm.ac.in', meetingsAttended: '1/2'},
        {name:'Amreen Parveen', email: '21f1006805@ds.study.iitm.ac.in', meetingsAttended: '1/2'},
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
    goToMyTeam(){
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
.container {
  background-color: #e0f7e9;
}

.navbar-brand {
  font-weight: bold;
}

.notification-bell {
  position: relative;
}

.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 0.7em;
}

.list-group-item {
  font-size: 16px;
}

.table th,
.table td {
  vertical-align: middle;
}
</style>
