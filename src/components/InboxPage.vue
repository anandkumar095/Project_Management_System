<template>
  <div class="main-container">
    <!-- Enhanced Navbar Header -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light pastel-header">
  <a class="navbar-brand" href="#">IITM Student Project Tracker</a>
  <div class="collapse navbar-collapse d-flex justify-content-between w-100">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" @click="goToDashboard">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="goToMyTeam">My Team</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" @click="goToInbox">Inbox</a>
      </li>
    </ul>
    <button class="btn btn-outline-secondary" @click="logout">Logout</button>
  </div>
</nav>


    <!-- Chat Container -->
    <div class="chat-wrapper">
      <!-- Chat List on the left -->
      <div class="chat-list">
        <h5 class="chat-list-header">Messages</h5>
        <ul class="list-group chat-contacts">
          <li class="list-group-item" 
              v-for="(chat, index) in uniqueChats" 
              :key="index" 
              :class="{ 'active-chat': chat.from === selectedChat }" 
              @click="selectChat(chat.from)">
            {{ chat.from }} - {{ chat.timestamp }}
          </li>
        </ul>
        <button class="btn btn-primary compose-button" @click="startNewChat">Compose</button>
      </div>

      <!-- Chat Box on the right -->
      <div class="chat-container" v-if="selectedChat">
        <div class="chat-header">
          <h4>Chat with {{ selectedChat }}</h4>
        </div>

        <div class="chat-box" ref="chatBox">
          <div v-for="msg in filteredMessages" :key="msg.timestamp" class="message-container">
            <div :class="{'message-sent': msg.isMine, 'message-received': !msg.isMine}">
              <p class="message-content">{{ msg.content }}</p>
              <div class="message-info">
                <span class="message-from">{{ msg.from }}</span>
                <span class="message-timestamp">{{ msg.timestamp }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Message input area -->
        <div class="input-area d-flex">
          <input 
            type="text" 
            v-model="newMessage" 
            class="form-control me-2" 
            placeholder="Write a message..."
            @keyup.enter="sendMessage"
          />
          <button class="btn btn-success" @click="sendMessage">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        { from: 'John Doe', content: 'Hello, how can I assist you?', timestamp: '10:00 AM', isMine: false },
        { from: 'Me', content: 'I wanted to discuss the project details.', timestamp: '10:05 AM', isMine: true },
        { from: 'John Doe', content: 'Sure, let’s go over it.', timestamp: '10:07 AM', isMine: false },
        { from: 'Alice', content: 'Hey, any updates on the project?', timestamp: '11:15 AM', isMine: false },
        { from: 'Me', content: 'I’ll send over the details shortly.', timestamp: '11:20 AM', isMine: true },
      ],
      selectedChat: null,
      newMessage: '',
    };
  },
  computed: {
    uniqueChats() {
      const uniqueSenders = new Map();
      this.messages.forEach((msg) => {
        if (!uniqueSenders.has(msg.from) && !msg.isMine) {
          uniqueSenders.set(msg.from, msg);
        }
      });
      return Array.from(uniqueSenders.values());
    },
    filteredMessages() {
      return this.messages.filter(msg => msg.from === this.selectedChat || (msg.isMine && this.selectedChat));
    },
  },
  methods: {
    goToDashboard() {
      this.$router.push('/dashboard');
    },
    goToMyTeam() {
      this.$router.push('/dashboard/myteam');
    },
    goToInbox() {
      this.$router.push('/dashboard/inbox');
    },
    logout() {
      this.$router.push('/');
    },
    startNewChat() {
      alert('Start a new chat');
    },
    selectChat(chatFrom) {
      this.selectedChat = chatFrom;
      this.scrollToBottom();
    },
    sendMessage() {
      if (this.newMessage.trim() && this.selectedChat) {
        this.messages.push({
          from: 'Me',
          content: this.newMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isMine: true,
        });
        this.newMessage = '';
        this.scrollToBottom();
      }
    },
    scrollToBottom() {
      this.$nextTick(() => {
        this.$refs.chatBox.scrollTop = this.$refs.chatBox.scrollHeight;
      });
    },
  },
  mounted() {
    this.scrollToBottom();
  },
};
</script>

<style scoped>
.main-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.pastel-header {
  background-color: #f0e6f6;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width:100%;
}

.navbar-brand, .nav-link {
  font-weight: 500;
  color: #5a5a5a !important;
}

.nav-link:hover {
  color: #6d6d6d !important;
}

.chat-wrapper {
  display: flex;
  height: calc(100vh - 60px);
  background-color: #fafafa;
}

.chat-list {
  width: 30%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e0e0e0;
  background-color: #f8f9fa;
  padding-bottom: 10px;
}

.chat-list-header {
  padding: 15px;
  font-weight: bold;
  text-align: center;
  background-color: #e6f0fa;
  color: #555;
}

.chat-contacts {
  overflow-y: auto;
  max-height: calc(100vh - 150px);
}

.compose-button {
  margin-top: auto;
  width: 90%;
  margin-left: 5%;
  border-radius: 15px;
  font-weight: bold;
  background-color: #e6f7ff;
  color: #007bff;
}

.active-chat {
  background-color: #d0ebff;
  color: #0056b3;
  font-weight: bold;
}

.chat-container {
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-left: 1%;
}

.chat-header {
  font-weight: bold;
  padding-bottom: 10px;
  color: #333;
}

.chat-box {
  flex-grow: 1;
  overflow-y: auto;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 8px;
}

.message-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.message-sent {
  align-self: flex-end;
  background-color: #d4f0fc;
  padding: 10px 15px;
  border-radius: 15px 15px 0 15px;
  max-width: 60%;
  color: #333;
}

.message-received {
  align-self: flex-start;
  background-color: #f3f3f3;
  padding: 10px 15px;
  border-radius: 15px 15px 15px 0;
  max-width: 60%;
  color: #333;
}

.message-content {
  margin: 0;
  font-size: 14px;
}

.message-info {
  font-size: 12px;
  color: #888;
  display: flex;
  justify-content: space-between;
}

.input-area {
  border-top: 1px solid #ddd;
  padding-top: 10px;
}

.form-control {
  border-radius: 20px;
}

.btn-success {
  border-radius: 20px;
}
</style>
