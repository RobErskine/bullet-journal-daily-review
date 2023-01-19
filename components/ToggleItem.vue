<template>
    <SwitchGroup as="div" class="flex items-center justify-between py-2">
      <span class="flex flex-grow flex-col">
        <SwitchLabel as="span" class="text-sm font-medium text-gray-900" passive>{{title}}</SwitchLabel>
        <SwitchDescription as="span" class="text-xs text-gray-500 inline-block ml-6">{{description}}</SwitchDescription>
      </span>
      <Switch v-model="enabled" :id=name :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex ml-4 h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']" :name=name>
        <span aria-hidden="true" :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
      </Switch>
    </SwitchGroup>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from '@headlessui/vue'
    
    const enabled = ref(false)

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        }
    })
</script>
  