<script setup>

import { NAV_ITEMS } from '../constants';
import { isPageValid } from '../validators';

import NavItems from './NavItems.vue';



defineProps ({
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid
  }
})

const emit = defineEmits({
  navigate: isPageValid
});

</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItems 
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        :class="{'bg-gray-200 pointer-events-none' :page === currentPage}"
        @click="emit('navigate', page)"
      >
        <component :is="icon" class="h-6 w-6" /> 
        {{ page }}
      </NavItems>
    </ul>
  </nav>
</template>
