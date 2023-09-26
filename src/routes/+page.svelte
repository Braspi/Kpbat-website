<script lang="ts">
    import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
    export let data;

    let slides = data.slides;
    let options: Options = {
        rewind: true,
        width: '100vw',
        height: '100vh',
        autoplay: true,
    }
</script>

<main>
    <Splide {options}>
        {#each slides as slide}
            <SplideSlide>
                <img src={slide.src} alt={slide.alt} class="brightness-50 h-screen w-screen bg-center object-cover"/>
            </SplideSlide>
        {/each}
    </Splide>
</main>
