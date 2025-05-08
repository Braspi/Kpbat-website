<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { _ } from 'svelte-i18n';
  import { Splide, SplideSlide, type Options, type SplideComponent } from '@splidejs/svelte-splide';
  import ServicesSection from "$lib/components/sections/ServicesSection.svelte";
  import About from "$lib/components/sections/AboutSection.svelte";
  import FormSection from "$lib/components/sections/FormSection.svelte";
  import GallerySection from "$lib/components/sections/GallerySection.svelte";
  import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import RealizationsSection from "$lib/components/sections/RealizationsSection.svelte";

  export let data;

  let width: number;
  let slides = data.slides;

  let splideRef: SplideComponent;
  let intervalId: NodeJS.Timer;

  let options: Options = {
    type: 'loop',
    rewind: true,
    autoplay: false,
    arrows: true,
  };

  $: options.arrows = width > 768;

  onMount(() => {
    intervalId = setInterval(() => {
      splideRef?.splide?.go('>');
    }, 8000);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });

  let text = "KPBAT •  Minimalist • Modern •";
  let repeatedText = Array(5).fill(text).join(" ");
</script>


<main class="relative z-0 h-screen md:h-[90vh] mb-6 w-[90vw] mx-auto md:w-screen flex justify-center items-center">
  <div class="w-full h-full md:-h-[15vh] md:w-[95vw]">
    <div class="absolute top-[40vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
      <h1 class="text-white text-2xl font-bold md:text-4xl lg:text-7xl whitespace-nowrap">{$_('header.main')}</h1>
      <h2 class="text-white text-base md:text-xl lg:text-2xl opacity-80">{$_('header.bottom')}</h2>
    </div>
    <div class="hidden lg:inline lg:absolute bottom-24 right-24 z-10 w-64 h-64 items-center justify-center">
      <svg viewBox="0 0 100 100" class="w-full h-full animate-spin-slow">
        <defs>
          <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"/>
        </defs>
        <text font-size="7" fill="white" font-weight="600">
          <textPath href="#circlePath" startOffset="0%">
            {repeatedText}
          </textPath>
        </text>
      </svg>
    </div>
    <div class="hidden lg:inline lg:absolute bottom-24 left-24 z-10 border text-white p-6 text-md border-opacity-5 bg-shadow border-shadow backdrop-blur-2xl xl:w-[30vw] rounded-xl">
      <p>{$_('header.contact.text')}</p>
      <button class="flex items-center gap-4 bg-black px-4 rounded-xl text-md mt-3">{$_('header.contact.btn')}
        <Fa icon={faArrowRight} class="m-auto my-3.5"/>
      </button>
    </div>

    <Splide {options} bind:this={splideRef}>
      {#each slides as slide}
        <SplideSlide class="overflow-hidden rounded-[40px] md:mt-4 h-screen w-[80vw] md:h-[85vh] md:w-[95vw]">
          <img
                  src={slide.src}
                  alt={slide.alt}
                  aria-label="img-main"
                  class="brightness-50 w-full h-full object-cover bg-center"
          />
        </SplideSlide>
      {/each}
    </Splide>


  </div>

</main>

<About/>
<RealizationsSection/>
<GallerySection/>
<ServicesSection/>
<FormSection/>

<svelte:window bind:outerWidth={width}/>

<style>
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animate-spin-slow {
    animation: spin-slow 50s linear infinite;
  }
</style>
