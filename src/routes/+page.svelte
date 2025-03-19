<script lang="ts">
    import { _ } from 'svelte-i18n'

    import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
    import ServicesSection from "$lib/components/sections/ServicesSection.svelte";
    import About from "$lib/components/sections/AboutSection.svelte";
    import FormSection from "$lib/components/sections/FormSection.svelte";
    import GallerySection from "$lib/components/sections/GallerySection.svelte";
    export let data;

    let width: number;

    let slides = data.slides;
    let options: Options = {
        type: 'loop',
        rewind: true,
        width: '100vw',
        height: '100vh',
        autoplay: true,
    }

    $: (width <= 768) ? options.arrows = false : options.arrows = true;

    let text = "KPBAT •  Minimalist • Modern •";
    let repeatedText = Array(5).fill(text).join(" ");
</script>

<main class="relative z-0 h-screen w-screen flex justify-center items-center">
    <div class="h-[85vh] w-[95vw]">
        <div class="absolute top-[48vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
            <h1 class="text-white text-2xl font-bold md:text-4xl lg:text-7xl whitespace-nowrap">{$_('header.main')}</h1>
            <h2 class="text-white text-base md:text-xl lg:text-2xl opacity-80">{$_('header.bottom')}</h2>
        </div>
        <div class="absolute bottom-24 right-24 z-10 w-64 h-64 items-center justify-center">
            <svg viewBox="0 0 100 100" class="w-full h-full animate-spin-slow">
                <defs>
                    <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                </defs>
                <text font-size="7" fill="white" font-weight="600" >
                    <textPath href="#circlePath" startOffset="0%">
                        {repeatedText}
                    </textPath>
                </text>
            </svg>
        </div>
        <Splide {options}>
            {#each slides as slide}
                <SplideSlide>
                    <img src={slide.src} alt={slide.alt} aria-label="img-main" height="100%" width="100%" class="brightness-50 rounded-[40px] h-[85vh] w-[95vw] mt-4 bg-center object-cover"/>
                </SplideSlide>
            {/each}
        </Splide>
    </div>

</main>

<About />
<GallerySection />
<ServicesSection />
<FormSection/>

<svelte:window bind:outerWidth={width} />

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