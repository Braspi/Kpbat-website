<script lang="ts">
import { _ } from "svelte-i18n";
import { generateGallery } from "$lib/utils/generateGallery";
</script>

<section class="min-h-[180vh] pt-0.5 xl:mb-0 bg-light lg:min-h-[90vh] ">
  <div class="m-auto my-10 text-center text-dark">
    <h2 class="text-2xl md:text-4xl lg:text-5xl font-light ">{$_("gallery.header")}</h2>
    <h3 class="text-sm md:text-xl lg:text-2xl whitespace-normal">{$_("gallery.description")}</h3>
  </div>
  <div class="flex flex-wrap gap-6 md:gap-10 m-auto justify-center pb-8 lg:pb-12">
    {#each generateGallery() as gallery}
      <img src={gallery.src} alt={gallery.alt} class="w-[80%] lg:w-[40%] xl:w-[25%] shadow-lg hover:scale-95 transition-transform duration-200"/>
    {/each}
  </div>
</section>