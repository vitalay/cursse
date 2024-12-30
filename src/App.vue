

<script>
export default {
  data() {
    return{
      titel: 'Дом',
      status: '',
      tasks: [ 'One', 'Two', 'three' ],
      cilca: 'https://www.google.com/'
    }
  },
  methods: {
  }
}
</script>
<template>
  <h1>Привет {{ titel }}</h1>
  <p v-if="status === 'activen'">Меня Видно</p>
  <p v-else-if="status === 'neactiven'">Меня не видно</p>
  <p v-else>типерь точно активен</p>
  
  <h3>Задание</h3>
 <ul>
  <li v-for="task in tasks" :key="task">{{ task }}</li>
 </ul>
 <a :href="cilca">Сылка на google</a>
</template>

