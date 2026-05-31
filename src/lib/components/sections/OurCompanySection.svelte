<script lang="ts">
    import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    import { _ } from 'svelte-i18n';
</script>

<section class="flex flex-col xl:flex-row px-4 sm:px-10 lg:px-12 py-10 gap-10 xl:gap-16">
  <div class="w-full xl:flex-2 max-w-[100%] xl:max-w-[850px]">
    <img
        src="img/1.webp"
        class="rounded-[30px] lg:rounded-[40px] w-full h-[300px] sm:h-[500px] lg:h-[700px] xl:h-[800px] object-cover mx-auto"
        alt="img-2"
    >
  </div>

  <div class="w-full xl:flex-1 flex items-center xl:-translate-y-12">
    <section class="px-4 sm:px-8 md:px-12 xl:px-0 bg-white text-black w-full">
      <div class="max-w-3xl 2xl:max-w-5xl mx-auto">
        <p class="text-base sm:text-lg md:text-xl uppercase tracking-wide mb-6 font-medium text-black">
          {$_('about-company.top.label')}
        </p>
        <h1 class="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-medium leading-tight mb-6 mt-8">
          {$_('about-company.top.title')}<br />
        </h1>
        <p class="text-base sm:text-lg md:text-xl mb-8 w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[40vw] 2xl:max-w-[35vw]">
          {$_('about-company.middle.text')}
        </p>
        <a href="/about" class="flex items-center text-sm lg:text-md gap-3 w-fit px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-900 transition">
          {$_('about-company.bottom.button')} <Fa icon={faArrowRight} class="text-lg text-white lg:text-xl" />
        </a>
      </div>
    </section>
  </div>
</section>
