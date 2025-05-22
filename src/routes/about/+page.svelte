<script lang="ts">
  import { _ } from 'svelte-i18n';
  const aboutLines = [1, 2, 3, 4];
</script>

<section class="flex flex-col xl:flex-row px-4 sm:px-6 md:px-8 lg:px-10 py-10 gap-8 xl:gap-16 min-h-screen">
  <div class="flex justify-center items-center w-full xl:flex-2 max-w-full xl:max-w-[850px]">
    <img
            src="/img/1.jpg"
            alt="img-2"
            class="rounded-2xl sm:rounded-3xl lg:rounded-[40px] w-full
             h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] xl:h-[650px] object-cover"
    />
  </div>

  <div class="w-full xl:flex-1 flex mt-6 sm:mt-8 md:mt-10 xl:my-auto">
    <section class="px-2 sm:px-4 md:px-6 xl:px-0 text-black w-full">
      <div class="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <p class="text-xs sm:text-sm md:text-base uppercase tracking-wide mb-3 sm:mb-4 font-medium">
          {$_('about-company.top.label')}
        </p>

        <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-5 mt-4">
          {$_('about-us.name')}
        </h1>

        {#each aboutLines as index}
          <p class="text-sm sm:text-base md:text-lg mb-3 leading-relaxed max-w-full">
            {$_(`about-us.line${index}`)}
          </p>
        {/each}
      </div>
    </section>
  </div>
</section>
