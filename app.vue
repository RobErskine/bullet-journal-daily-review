<style>
body{
  margin:0px;
  padding:0px;
  height:100vh;
}

body > div{
  height: inherit;
}
</style>

<template>
  <!-- {{ currentTimeInHours() }} -->
  <main class="p-4 w-full max-w-md block flex pb-24 mx-auto">
    <div v-if="currentTimeInHours() < 21" class="block w-full">
      <div class="flex flex-col align-center justify-center p-8">
        <h1 class="text-center text-3xl font-bold">It's a tad too early to review today!</h1>
        <p class="text-center text-md block mt-6">You cannot review today yet. <br/>Come back after 9pm est.</p>
      </div>
    </div>
    <div v-else>
      <div v-if="submitted === false">
        <form id="daily-review" data-netlify="true" method="POST" netlify name="bullet-journal" @submit.prevent="handleSubmit()">
          <div>
            <input id="date" type="hidden" name="date" :value=currentDate() >
            <div>
              <h1 class="text-3xl text-center font-bold">
                Daily Review
              </h1>
            </div>

            <div class="block py-2">
              <div class="relative pt-1">
                <label for="numberreview" class="form-label">How was your day?</label>
                <input
                  type="range"
                  class="form-range appearance-none w-full h-2 my-4 p-0 bg-gray-200 focus:outline-none focus:ring-0 focus:shadow-none rounded-2xl"
                  min="0"
                  max="100"
                  step="5"
                  aria-describedby="numberreview-description"
                  id="numberreview"
                />
                <p class="mt-1 text-sm text-gray-500" id="numberreview-description">Use a 1-100 scale. 100 Being a great day!</p>
              </div>
            </div>
            <ToggleItem title="🇫🇷 Practice French?" description="Avez-vous étudié le français aujourd'hui? C'est en forgeant qu'on devient forgeron!" name="language" />
          
            <ToggleItem title="💪 Get some exercise?" description="Don't gotta be super buff but you can't have a beer gut either. Get your heart rate up today?" name="exercise" />

            <ToggleItem title="👬 Hang with friends?" description="Gettin' older makes it harder to meet new friends. Did you talk to another friendly soul?" name="friends" />

            <ToggleItem title="🎢 Jam on a personal project?" description="Nothing like building something with your own hands. Make some time to make something for fun?" name="personalproject" />

            <ToggleItem title="💡 Learn something new?" description="Stagnation is death! Keep your mind sharp! Did you get spend time flex a new skill?" name="learn" />

            <div class="flex justify-between content-center items-center pt-4">
              <label for="alcohol" class="inline-block text-sm font-medium text-gray-700 mb-2">Number of alcoholic drinks consumed?</label>
              <input type="tel" name="alcohol" id="alcohol" class="inline-block p-2 text-center w-20 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            </div>

            <div>
              <label for="review" class="block mt-4 text-sm font-medium text-gray-700">Want to expand on anything?</label>
              <div class="mt-1">
                <textarea rows="3" name="review" id="review" class="block p-2 border-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div class="flex w-full align-items-end justify-end">
              <button type="submit" class="inline-flex items-center mt-4 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <EnvelopeIcon class="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                Submit daily review
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-else>
        <div class="flex flex-col align-center justify-center h-full p-8">
          <h1 class="text-center text-3xl font-bold">Thanks for reviewing today!</h1>
          <p class="text-center text-md block mt-6">Pull in data from Notion here to show trends here.</p>
          <a href="/" class="inline-block items-center mt-4 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Reset</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import { EnvelopeIcon, LanguageIcon } from '@heroicons/vue/20/solid'
</script>

<script>
export default {
  data() {
    return {
      submitted: false
    }
  },
  methods: {
    currentDate() {
      const current = new Date();
      const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      const days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
      const date = `${current.getFullYear()}-${months[current.getMonth()]}-${days[current.getDate()]}`;
      return date;
    },
    currentTimeInHours() {
      const current = new Date();
      const hours = current.getHours();
      return hours;
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit() {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          'form-name': 'bullet-journal',
          'date': document.getElementById('date').value,
          'numberreview': parseInt(document.getElementById('numberreview').value),
          'language': document.getElementsByName('language')[0].checked,
          'exercise': document.getElementsByName('exercise')[0].checked,
          'friends': document.getElementsByName('friends')[0].checked,
          'personalproject': document.getElementsByName('personalproject')[0].checked,
          'learn': document.getElementsByName('learn')[0].checked,
          'review': document.getElementById('review').value,
          'alcohol': document.getElementById('alcohol').value,
        })
      }).then(() => { 
        // alert('success!')
        this.submitted = true 
      }).catch((error) => alert(error));
    }
  }
}
</script>