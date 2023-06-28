<template>
  <div class="container relative rounded-lg top-32 left-40">
    <div class="sm:flex">
      <nav class="mx-auto p-14">
        <NuxtLink to="http://192.168.24.167/" title="this is dumbest button ever" class="space-y-2 sm:py-1 rounded-xl opacity-80 shadow-lg hover:bg-indigo-400 max-w-sm bg-white p-3 hello">Ссылка на Docs</NuxtLink>
      </nav>
    </div>

    <div class="container gap-6 font-bold flex p-4">
      <nav class="ml-6">
        <button type="default" class="text-[#98f1c7] p-4 rounded-xl shadow-2xl shadow-cyan-500/80 hover:shadow-cyan-300/80 bg-gradient-to-r from-sky-900 to-cyan-800 hover:from-sky-800 hover:to-cyan-500" @click="refresh">
          Перезагрузить
        </button>
      </nav>
      <nav>
        <NuxtLink to="https://www.youtube.com/@lemonner9212/"
          class="block text-[#98f1c7] p-4 rounded-xl shadow-2xl shadow-violet-500/80 hover:shadow-violet-300/80 bg-gradient-to-r from-indigo-900 to-blue-800 hover:from-indigo-800 hover:to-blue-500"
          target="_blank"
          rel="nofollow"
          title="hello, guys"
        >
          Youtube
        </NuxtLink>
      </nav> 
      <nav>
        <NuxtLink to="https://monkeytype.com/"
          class="block text-[#98f1c7] p-4 rounded-xl shadow-2xl shadow-violet-500/80 hover:shadow-violet-300/80 bg-gradient-to-r from-indigo-900 to-blue-800 hover:from-indigo-800 hover:to-blue-500"    
          target="_blank"
          rel="nofollow"
          title="bye, guys"
        >
          Monkeytype
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      refresh() {
        window.location.reload();
    }
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