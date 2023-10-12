<script lang="ts">
import {_} from "svelte-i18n";

</script>

<section class="min-h-screen bg-light">
  <div class="relative z-0 top-24">
    <div class="m-auto my-10 text-center text-dark">
      <h2 class="text-2xl md:text-4xl lg:text-5xl font-light ">{$_("gallery.header")}</h2>
      <h3 class="text-sm md:text-xl lg:text-2xl whitespace-normal">{$_("gallery.description")}</h3>
    </div>
    <div class="flex flex-wrap gap-6 md:gap-10 m-auto justify-center pb-8 lg:pb-12">
      <div class="relative w-[80%] lg:w-[40%] xl:w-[25%] shadow-lg hover:scale-95 transition-transform duration-200">
        <img src="img/gallery/1.webp" alt="test" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-white opacity-50"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <p class="text-center text-3xl z-10">kategoria 1</p>
        </div>
      </div>
    </div>
  </div>
</section>