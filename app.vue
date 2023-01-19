<script setup>
  import { EnvelopeIcon } from '@heroicons/vue/20/solid'
</script>

<script>
export default {
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
      return date;
    }
  }
};
</script>

<template>
  <main class="p-4 w-full">
    <form data-netlify="true" netlify name="bullet-journal">
      <input type="hidden" name="date" :value=currentDate() >
      <div>
        <h1 class="text-3xl text-center font-bold">
          Daily Review
        </h1>
      </div>

      <!-- Daily rating -->
      <div class="block py-2">
        <label for="email" class="block text-sm font-medium text-gray-700">How was your day?</label>
        <div class="mt-2">
          <input type="tel" name="rating" id="rating" class="block p-2 text-center w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="7" aria-describedby="rating-description" pattern="\b([1-9]|10)\b" />
        </div>
        <p class="mt-1 text-sm text-gray-500" id="rating-description">Use a 1-10 scale. 10 Being a great day!</p>
      </div>
      
      <ToggleItem title="🇫🇷 Practice French?" description="Avez-vous étudié le français aujourd'hui? C'est en forgeant qu'on devient forgeron!" name="language" />
    
      <ToggleItem title="💪 Get some exercise?" description="Don't gotta be super buff but you can't have a beer gut either. Get your heart rate up today?" name="exercise" />

      <ToggleItem title="👬 Hang with friends?" description="Gettin' older makes it harder to meet new friends. Did you talk to another friendly soul?" name="friends" />

      <ToggleItem title="🎢 Jam on a personal project?" description="Nothing like building something with your own hands. Make some time to make something for fun?" name="personalproject" />

      <ToggleItem title="💡 Learn something new?" description="Stagnation is death! Keep your mind sharp! Did you get spend time flex a new skill?" name="personalproject" />

      <div>
        <label for="review" class="block mt-4 text-sm font-medium text-gray-700">Want to expand on anything?</label>
        <div class="mt-1">
          <textarea rows="3" name="review" id="review" class="block p-2 border-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
      </div>

      <div class="flex w-full align-items-end justify-end">
        <button type="button" class="inline-flex items-center mt-4 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <EnvelopeIcon class="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
          Button text
        </button>
      </div>

    </form>
  </main>
</template>
