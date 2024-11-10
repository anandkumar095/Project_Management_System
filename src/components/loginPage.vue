<template>
  <div class="container d-flex flex-column align-items-center justify-content-center min-vh-100">
    <div class="card shadow-lg p-4">
      <h1 class="card-title text-center">Welcome to the IITM Student Project Tracker!</h1>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">Email-ID</label>
          <input  id="email" v-model="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" id="password" v-model="password" class="form-control" required />
        </div>
        <div class="form-check mb-3">
          <input type="checkbox" id="instructor" v-model="isInstructor" class="form-check-input" />
          <label for="instructor" class="form-check-label">Are you an Instructor?</label>
        </div>
        <div class="mb-3">
          <a href="#" @click.prevent="forgotPassword" class="text-decoration-none">Forgot Password?</a>
        </div>
        <button type="submit" class="btn btn-primary w-100">LOGIN</button>
      </form>
    </div>
  </div>
</template>

<script>
///import { is } from 'core-js/core/object';

export default {
  data() {
    return {
      email: '',
      password: '',
      isInstructor: false,
    };
  },
  methods: {
    login() {
      // Basic authentication
      if (this.email === 'user' && this.password === 'password' && this.isInstructor === false) {
        this.$router.push('/dashboard');
      } 
      else if (this.email === 'user' && this.password === 'password' && this.isInstructor === true){
        this.$router.push('/instructor/1');
      }
    },
    forgotPassword() {
      // Handle forgot password logic here
      console.log('Forgot Password clicked');
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #e0f7e9;
}

.card {
  width: 100%;
  max-width: 400px;
}

.card-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-check-label {
  margin-left: 10px;
}
</style>


