<script lang="ts">
import { _ } from "svelte-i18n";
import { onMount } from "svelte";
import {categories} from "$lib/stores/store";
import Fa from "svelte-fa";

onMount(()=> {
  fetch('https://api.kpbat.com/v1/gallery/categories')
    .then(response => response.json())
    .then(data => {
      categories.set(data)
    }).catch(error => {
      console.error(error);
    });
})




</script>

<section class="min-h-screen pb-24">
  <div class="relative z-0 top-8">
<!--    <div class="m-auto my-10 text-center text-dark">-->
<!--      <h2 class="text-3xl md:text-4xl lg:text-5xl font-light ">{$_("gallery.header")}</h2>-->
<!--      <h3 class="text-md md:text-xl lg:text-2xl whitespace-normal">{$_("gallery.description")}</h3>-->
<!--    </div>-->
    <div class="flex flex-col lg:flex-row justify-between gap-6 mb-10 px-20">
      <h2 class="text-4xl md:text-5xl lg:text-7xl font-semibold lg:w-[40vw] leading-tight">
        {$_('gallery.header')}
      </h2>

      <div class="flex-1 flex flex-col items-start lg:items-end justify-end">
        <p class="text-left lg:text-right text-gray-600 w-full lg:w-[30vw] text-sm md:text-xl">
          {$_('gallery.description')}
        </p>
      </div>
    </div>
    <div class="flex flex-wrap gap-6 md:gap-10 m-auto justify-center pb-8 lg:pb-12">
      {#each $categories as category}
        <div class="relative w-[80%] lg:w-[40%] xl:w-[25%] shadow-lg hover:scale-95 transition-transform duration-200">
          <a href="/gallery/images/?id={ category.id }">
            <img src="https://api.kpbat.com/resources/category_{category.id}/{category.primary_image}" alt="test" class="w-full max-h-80 object-cover" />
            <div class="absolute inset-0 bg-white opacity-50"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <p class="text-center text-2xl z-10 lg:text-3xl">{ category.display_name }</p>
            </div>
          </a>
        </div>
      {/each}
    </div>
<!--    <div class="">-->
<!--      {#each Array(totalPages) as _, idx}-->
<!--        <a href="/galley/{idx}">-->
<!--          {idx + 1}-->
<!--        </a>-->
<!--      {/each}-->
<!--    </div>-->
  </div>
</section>

