<script lang="ts">
    import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide';
    export let data;

    let slides = data.slides;
    let options: Options = {
        rewind: true,
        width: '100vw',
        height: '100vh',
        gap: '2rem',
        autoplay: true,
    }
</script>

<main>
    <Splide {options}>
        { #each slides as slide }
            <SplideSlide>
                <img src="" class="bg-contain bg-center" style='background-image: url("/{ slide.src }")'/>
<!--                <img src="{ slide.src }" alt={ slide.alt } class="brightness-50 h-full w-full bg-cover"/>-->
            </SplideSlide>
        { /each }
    </Splide>
</main>