<template>
  <div class="rounded-lg p-6 ring-1 ring-slate-900/5 shadow-xl">
    <header class="hover:bg-indigo-400 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-1 sm:flex sm:space-x-6">
      <nav class="mx-auto p-5">
        <NuxtLink to="http://192.168.7.177/docs#/" class="hello">Otherwiser</NuxtLink>
      </nav>
    </header>
  
    <div class="ml-6">
      <button class="text-[#98f1c7] font-bold p-4 rounded-xl shadow-lg bg-gradient-to-r from-sky-900 to-cyan-800 hover:from-sky-800 hover:to-cyan-500" @click="refresh">
        Refresh
      </button>
    </div>

    <div class="container gap-4 font-bold flex p-6">
      <nav>
        <a
        class ="text-[#98f1c7] p-4 rounded-xl shadow-lg bg-gradient-to-r from-indigo-900 to-blue-800 hover:from-indigo-800 hover:to-blue-500"
          href="https://www.youtube.com/@lemonner9212"
          target="_blank"
          rel="nofollow"
          title = "hello, guys"
        >
          Youtube
        </a>
      </nav> 
      <nav>
        <a
        class ="text-[#98f1c7] p-4 rounded-xl shadow-lg bg-gradient-to-r from-indigo-900 to-blue-800 hover:from-indigo-800 hover:to-blue-500"    
          href="https://monkeytype.com/"
          target="_blank"
          rel="nofollow"
          title = "bye, guys"
        >
          Monkeytype
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    refresh:{
      $route() {
        this.$nuxt.refresh()
      },
    }
  }
</script>

<style scoped>
  .hello {
    color : #664b49;
    font-family: Georgia, Times, serif;
    font-size: 3.5rem;
  }
</style>