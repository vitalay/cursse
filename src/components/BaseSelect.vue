<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { validatorSelectedOptions } from '../validators';
import BaseButton from './BaseButton.vue';

//defineProps(['selected', 'options', 'placeholder']);
defineProps({
  selected: {
    required: true,
    type: [String, Number]
  },
  options: {
    required: true,
    type: Array,
    validator: validatorSelectedOptions
  },
  placeholder: {
    default: 'Rest',
    type: String
  }
});

</script>

<template>
  <div class="flex gap-2">

     <BaseButton>
        <XMarkIcon class="h-8" />
     </BaseButton>

      <select class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl">
        <option selected disabled value="">{{ placeholder }}</option>
        <option 
        v-for="{value, label} in options"
        :key="value" 
        :value="value" 
        :selected="value === selected"> 
        {{ label }}
        </option>
       
      </select>
    </div>
</template>