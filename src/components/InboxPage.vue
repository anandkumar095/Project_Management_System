<template>
  <div class="inbox-container d-flex">
    <!-- Sidebar with Mail List and Compose Button -->
    <div class="sidebar col-3 p-3 bg-light border-right">
      <button class="btn btn-primary w-100 mb-3" @click="composeNewMail">Compose</button>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search mail"
        class="form-control mb-3"
      />
      <ul class="list-group">
        <li
          v-for="mail in filteredMails"
          :key="mail.id"
          class="list-group-item list-group-item-action"
          :class="{ active: selectedMail && selectedMail.id === mail.id }"
          @click="openMail(mail)"
        >
          <div><strong>{{ mail.from }}</strong></div>
          <div class="small text-muted">{{ mail.subject }}</div>
        </li>
      </ul>
    </div>

    <!-- Mail Content Area -->
    <div class="content col-9 p-3">
      <div v-if="selectedMail" class="mail-view">
        <h5>{{ selectedMail.subject }}</h5>
        <p><strong>From:</strong> {{ selectedMail.from }}</p>
        <hr />
        <div class="chat-history">
          <div v-for="msg in selectedMail.messages" :key="msg.id" class="message">
            <p><strong>{{ msg.sender }}:</strong> {{ msg.content }}</p>
          </div>
        </div>
        <hr />
        <div class="message-input">
          <input
            v-model="newMessage"
            placeholder="Write a message..."
            class="form-control mb-2"
          />
          <button @click="sendMessage" class="btn btn-primary">Send</button>
        </div>
      </div>
      <div v-else class="d-flex justify-content-center align-items-center">
        <p class="text-muted">Select a message to view</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedMail: null,
      newMessage: '',
      mails: [
        {
          id: 1,
          from: 'user@example.com',
          subject: 'Welcome to the project tracker!',
          messages: [
            { id: 1, sender: 'user@example.com', content: 'Hello, Padmaja!' },
            { id: 2, sender: 'Padmaja Sharma', content: 'Hello! Thank you for the message.' },
          ],
        },
        // Additional sample mails...
      ],
    };
  },
  computed: {
    filteredMails() {
      return this.mails.filter((mail) =>
        mail.from.includes(this.searchQuery) || mail.subject.includes(this.searchQuery)
      );
    },
  },
  methods: {
    composeNewMail() {
      // Handle the compose mail action
      alert('Compose mail clicked');
    },
    openMail(mail) {
      this.selectedMail = mail;
    },
    sendMessage() {
      if (this.newMessage.trim()) {
        this.selectedMail.messages.push({
          id: Date.now(),
          sender: 'Padmaja Sharma',
          content: this.newMessage,
        });
        this.newMessage = '';
      }
    },
  },
};
</script>

<style scoped>
.inbox-container {
  height: 100vh;
}
.sidebar {
  height: 100%;
  overflow-y: auto;
}
.chat-history {
  max-height: 300px;
  overflow-y: auto;
}
.message-input input {
  margin-top: 10px;
}
</style>
