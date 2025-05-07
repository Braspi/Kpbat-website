<!--<script lang="ts">-->
<!--  import {_} from "svelte-i18n";-->
<!--</script>-->

<!--<section class="min-h-[70vh] xl:mb-0 bg-dark text-light">-->
<!--  <div class="flex flex-col lg:flex-row">-->
<!--    <div class="flex-[3] ml-[10%] mr-[10%] mt-[6%] lg:mr-0 ">-->
<!--      <h2 class="font-extrabold text-lg tracking-widest leading-8 uppercase mb-2 2xl:text-xl">{$_('about.name')}</h2>-->
<!--      <h3 class="not-italic font-bold text-4xl mb-7 2xl:text-5xl">{$_('about.header')}</h3>-->
<!--      <p class="font-normal text-lg lg:text-base 2xl:text-2xl">-->
<!--        {$_('about.line1')}-->
<!--        <br> <br>-->
<!--        {$_('about.line2')}-->
<!--        <br> <br>-->
<!--        {$_('about.line3')}-->
<!--        <br> <br>-->
<!--        {$_('about.line4')}-->
<!--      </p>-->
<!--    </div>-->
<!--    <div class="flex-[3] m-[10%] lg:m-0 lg:mt-[7%]">-->
<!--      <img src="img/1.jpg" alt="hi-png" class="h-[80%] mx-auto rounded-md shadow-inner lg:h-[75%] 2xl:">-->
<!--    </div>-->
<!--  </div>-->
<!--</section>-->

<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";



</script>
<section class="flex gap-10 px-10 pb-10 max-h-[950px]">
  <div class="flex-2 relative">
    <div class="absolute z-10 bottom-24 left-0 bg-white h-[100px] w-[320px] rounded-tr-[45px] flex justify-start items-center"><p class="font-semibold text-6xl translate-y-2">{$_('about.left.first')}</p></div>
    <div class="absolute z-10 bottom-0 left-0 bg-white h-[100px] w-[400px] rounded-tr-[40px] flex justify-start items-center"><p class="font-semibold text-6xl ">{$_('about.left.last')}</p></div>
    <img src="img/carousel/4.jpg" alt="hi-png" class="rounded-[40px] w-[1150px] object-cover">
  </div>
  <div class="flex-1 flex flex-col justify-between ">
    <div class="bg-[#F1EAE2] rounded-[40px] p-8">
      <div class="flex items-center justify-center font-medium border border-black px-2 py-3 rounded-full w-[200px]">{$_('about.right.top.header')}</div>
      <p class="py-4 text-lg font-medium">{$_('about.right.top.desc')}</p>
      <h2 class="text-3xl font-semibold w-[400px]">{$_('about.right.top.title')}</h2>
    </div>
    <div class="relative">
    <div class="absolute flex justify-center items-center -right-2 -bottom-2 bg-white rounded-full h-20 w-20 z-30">
      <div class="bg-black w-16 h-16 rounded-full flex justify-center items-center">
        <Fa icon={faArrowRight} class="text-white text-2xl" />
      </div>
    </div>

    <img src="img/carousel/2.jpg" class="rounded-[40px] z-0 w-[1150px] object-cover" alt="img-2">

    <div class="absolute inset-0 bg-black opacity-20 z-20 rounded-[40px] flex items-center justify-center">
    </div>
  </div>
  </div>
</section>