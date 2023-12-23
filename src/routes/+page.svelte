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
</script>

<main class="relative z-0">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <h1 class="text-white text-2xl font-semibold md:text-4xl lg:text-6xl whitespace-nowrap">{$_('header.main')}</h1>
        <h2 class="text-white text-base md:text-xl lg:text-2xl">{$_('header.bottom')}</h2>
    </div>
    <Splide {options}>
        {#each slides as slide}
            <SplideSlide>
                <img src={slide.src} alt={slide.alt} aria-label="img-main" height="100%" width="100%" class="brightness-50 h-screen w-screen bg-center object-cover"/>
            </SplideSlide>
        {/each}
    </Splide>
</main>

<About />
<GallerySection />
<ServicesSection />
<FormSection/>

<svelte:window bind:outerWidth={width} />
