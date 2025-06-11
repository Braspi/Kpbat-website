<script lang="ts">
    import { _ } from 'svelte-i18n';

    const aboutLines = [1, 2, 3, 4];
</script>

<section class="flex flex-col xl:flex-row px-4 sm:px-6 md:px-10 lg:px-12 py-10 gap-10 xl:gap-16 min-h-screen md:-translate-y-12">
  <div class="flex justify-center items-center w-full xl:flex-2 max-w-full xl:max-w-[850px]">
    <img
        src="/img/1.webp"
        class="rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[750px] object-cover mx-auto"
        alt="img-2"
    >
  </div>

  <div class="w-full xl:flex-1 flex mt-6 sm:mt-10 md:mt-12 xl:my-auto xl:-translate-y-12">
    <section class="px-2 sm:px-4 md:px-8 xl:px-0 bg-white text-black w-full">
      <div class="max-w-full sm:max-w-2xl md:max-w-3xl 2xl:max-w-5xl mx-auto">
        <p class="text-sm sm:text-base md:text-lg uppercase tracking-wide mb-4 sm:mb-6 font-medium text-black">
          {$_('about-company.top.label')}
        </p>

        <h1 class="text-3xl sm:text-5xl md:text-6xl xl:text-8xl font-semibold leading-tight mb-6 mt-4 sm:mt-8">
          {$_('about-us.name')}<br />
        </h1>

        {#each aboutLines as index}
          <p class="text-sm sm:text-base md:text-lg mb-4 w-full max-w-full sm:max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[40vw] 2xl:max-w-[35vw] leading-relaxed">
            {$_(`about-us.line${index}`)}
          </p>
        {/each}
      </div>
    </section>
  </div>
</section>
