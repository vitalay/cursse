
<script setup>  
import { ref } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/24/outline';

</script>

 
<template>
<header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
  <a href="#">
    <img src="./assets/img/logo.png" alt="logo" class="h-9">
  </a>
  <a href="#" class="text-sm">
    <div class="flex items-center gap-1">
      dey complete!
      <CheckCircleIcon class="h-7 text-green-500" />
    </div>
    <div class="flex items-center gap-1">
      <div>Progress: <span class="font-mono">20%</span></div>
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
    </div>
  </a>
 
</header> 
<main>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid perferendis harum sint mollitia est ipsam accusantium labore officia consequatur. Ipsa facilis magnam eaque voluptatem quos, blanditiis assumenda praesentium deleniti?</main>

</template>
 