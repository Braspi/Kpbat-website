<!--<script lang="ts">-->
<!--import { _ } from "svelte-i18n";-->
<!--import { generateGallery } from "$lib/utils/generateGallery";-->
<!--</script>-->

<!--<section class="min-h-[180vh] pt-0.5 xl:mb-0 bg-light lg:min-h-[90vh]">-->
<!--  <div class="m-auto my-10 text-center text-dark">-->
<!--    <h2 class="text-2xl md:text-4xl lg:text-5xl font-light ">{$_("gallery-sec.header")}</h2>-->
<!--    <h3 class="text-sm md:text-xl lg:text-2xl whitespace-normal">{$_("gallery-sec.description")}</h3>-->
<!--  </div>-->
<!--  <a href="/gallery" aria-label="gallery">-->
<!--    <div class="flex flex-wrap gap-6 md:gap-10 m-auto justify-center pb-8 lg:pb-0">-->
<!--        {#each generateGallery() as gallery}-->
<!--          <img src={gallery.src} alt={gallery.alt} width="100%" height="100%" class="w-[80%] lg:w-[40%] xl:w-[25%] shadow-lg hover:scale-95 transition-transform duration-200"/>-->
<!--        {/each}-->
<!--    </div>-->
<!--  </a>-->
<!--</section>-->

<script lang="ts">

import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Fa from "svelte-fa";
import {_} from 'svelte-i18n'


</script>

<section class="flex px-8 py-5">
  <div class="flex-2">
    <img src="img/1.jpg" class="rounded-[30px] lg:rounded-[40px] w-[850px] z-0 h-[800px] object-cover" alt="img-2">
  </div>
  <div class="flex-1 flex items-center -translate-y-12">
    <section class="px-6 md:px-16 bg-white text-black">
      <div class="max-w-3xl mx-auto">
        <p class="text-xl uppercase tracking-wide mb-8 font-medium text-black">{$_('about-company.top.label')}</p>
        <h1 class="text-5xl md:text-8xl font-medium leading-tight mb-8 mt-8">
          {$_('about-company.top.title')}<br />
        </h1>
        <p class="text-xl mb-8 w-[30vw]">
          {$_('about-company.middle.text')}
        </p>
        <a href="#about" class="flex items-center gap-3 w-fit px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-900 transition">
          {$_('about-company.bottom.button')} <Fa icon={faArrowRight} class="text-white text-xl" />
        </a>
      </div>
    </section>

  </div>
</section>
