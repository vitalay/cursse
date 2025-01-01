<script setup>
import { ref } from 'vue';

const name = ref('Дом');
const status = ref('active');
const tasks = ref(['One', 'Two', 'three']);
const newTask = ref('');

const toggleStatus = () => {  
  if (status.value === 'active') {
    status.value = 'pending';
  }
  else if (status.value === 'pending') {
    status.value = 'inactive';
  }
  else {
    status.value = 'active';
  };

};
  const addTask = () => {
    if (newTask.value.trim() !== '') {
      tasks.value.push(newTask.value);
      newTask.value = '';
    }
  }

</script>

<template>
  <h1>Привет {{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="addTask">Добавить задачу</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">Submit</button>
  </form>
  <h3>Задание</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <button @click="toggleStatus">Смена Статуса</button>
</template>