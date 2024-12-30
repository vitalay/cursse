<script setup>
     import { ref } from 'vue';

     const name =  ref('Дом');
     const status = ref('active');
     const tasks = ref(['One', 'Two', 'three']);   

     const toggleStatus = () => {
       if (status.value === 'active') {
         status.value = 'pending';
       }
       else if (status.value === 'pending') {
         status.value = 'inactive';
       }
       else {
         status.value = 'active';
       }
     };
</script>

<template>
  <h1>Привет {{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
  <h3>Задание</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <button @click="toggleStatus">Смена Статуса</button>
</template>