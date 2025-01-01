<script setup>
import { ref, onMounted } from 'vue';

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

};
const deleteTask = (index) => {
  tasks.value.splice(index, 1)

};
onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await response.json();
    tasks.value = data.map((task) => task.title);

  } catch (error) {
    console.log('error fetching tasks');
  }
});

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
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">удалить</button>
    </li>
  </ul>
  <button @click="toggleStatus">Смена Статуса</button>
</template>