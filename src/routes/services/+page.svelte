<script lang="ts">
  import {page} from "$app/stores";
  import {onMount} from "svelte";
  import {type Section, sections as s} from "$lib/utils/getSections";
  import {_} from "svelte-i18n";

  let sections = s;
  let sectionId = 0;
  let section:Section;

  onMount(() =>{
    const queryId = $page.url.searchParams.get("id");
    const id = queryId == null ? 0 : parseInt(queryId);
    sectionId = id;
      section = sections.find((item:Section) =>{
          return item.id == id;
      })
  });
</script>

<section class="min-h-screen bg-light">
  <div class="flex flex-wrap justify-center items-center h-screen">
    <div class="grid grid-cols-1 w-[90%] md:grid-cols-3 grid-rows-1 gap-0 md:w-3/4">
      { #if section}
        <div class="text-left col-span-2 row-span-1 w-[90%] ">
          <h2 class="text-4xl md:text-5xl font-bold text-dark">{ $_(section.text) }</h2>
          <h3 class="text-xl md:text-md lg:text-xl font-light text-dark pt-2">{ $_(section.description) }</h3>
        </div>
        <div class= "col-span-1 row-span-1 hidden md:inline-block">
          <img src="/img/ourservices/{ sectionId }.jpg" alt="services" class="h-[300px] w-[400px] rounded-md">
        </div>
      {/if}
    </div>
  </div>
</section>

