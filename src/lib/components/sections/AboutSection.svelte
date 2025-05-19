<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
</script>

<section id="about" class="flex flex-col lg:flex-row gap-5 lg:gap-10 px-4 sm:px-6 lg:px-14 pb-5 lg:pb-10 max-h-[1800px]">
  <div class="lg:flex-2 relative w-full">
    <div class="absolute z-10 bottom-16 lg:bottom-24 left-0 bg-white h-[70px] lg:h-[100px] w-[220px] sm:w-[280px] lg:w-[320px] rounded-tr-[30px] lg:rounded-tr-[45px] flex justify-start items-center">
      <p class="font-semibold text-4xl sm:text-5xl lg:text-6xl translate-y-1 lg:translate-y-2">{$_('about.left.first')}</p>
    </div>
    <div class="absolute z-10 bottom-0 left-0 bg-white h-[70px] lg:h-[100px] w-[280px] sm:w-[350px] lg:w-[400px] rounded-tr-[30px] lg:rounded-tr-[40px] flex justify-start items-center">
      <p class="font-semibold text-4xl sm:text-5xl lg:text-6xl">{$_('about.left.last')}</p>
    </div>
    <img src="img/carousel/4.jpg" alt="hi-png" class="rounded-[30px] lg:rounded-[40px] w-full h-[400px] sm:h-[500px] lg:h-[60vh] object-cover">
  </div>

  <div class="flex-1 flex flex-col gap-5 lg:gap-0 lg:justify-between w-full">
    <div class="bg-[#F1EAE2] rounded-[30px] lg:rounded-[40px] p-6 lg:p-8 h-[250px] sm:h-[280px] xl:h-[40vh]">
      <div class="flex items-center justify-center font-medium border border-black px-2 py-2 lg:py-3 rounded-full w-[180px] lg:w-[200px] text-sm lg:text-base">
        {$_('about.right.top.header')}
      </div>
      <p class="py-3 lg:py-4 text-base lg:text-lg font-medium w-full lg:w-[400px]">
        {$_('about.right.top.desc')}
      </p>
      <h2 class="text-2xl lg:text-3xl font-semibold w-full lg:w-[420px]">
        {$_('about.right.top.title')}
      </h2>
    </div>

    <div class="relative h-[300px] sm:h-[350px] lg:h-[28vh]">
      <div class="absolute flex justify-center items-center -right-2 -bottom-2 bg-white rounded-full h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 z-30">
        <div class="bg-black w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex justify-center items-center">
          <Fa icon={faArrowRight} class="text-white text-xl sm:text-2xl" />
        </div>
      </div>
      <div class="absolute p-6 lg:p-8 z-50">
        <div class="flex items-center justify-center font-medium border border-white text-white px-2 py-2 lg:py-3 rounded-full w-[180px] lg:w-[200px] text-sm lg:text-base">
          {$_('about.right.bottom.header')}
        </div>
        <p class="py-3 lg:py-4 text-base lg:text-lg text-white font-medium w-full lg:w-2/3">
          {$_('about.right.top.desc')}
        </p>
      </div>

      <img src="img/carousel/2.jpg" class="rounded-[30px] lg:rounded-[40px] z-0 w-full h-full lg:w-[1150px] object-cover" alt="img-2">

      <div class="absolute inset-0 bg-black opacity-40 z-20 rounded-[30px] lg:rounded-[40px] flex items-center justify-center">
      </div>
    </div>
  </div>
</section>