<!--<script lang="ts">-->
<!--    import { Splide, SplideSlide } from '@splidejs/svelte-splide';-->
<!--    import { onMount } from 'svelte';-->
<!--    import { generateGallery } from "$lib/utils/generateMainGallery";-->

<!--    let main: Splide;-->
<!--    let thumbs: SplideSlide;-->

<!--    const slides = generateGallery();-->

<!--    const thumbsOptions = {-->
<!--        type        : 'slide',-->
<!--        rewind      : true,-->
<!--        gap         : '1rem',-->
<!--        pagination  : false,-->
<!--        fixedWidth  : 110,-->
<!--        fixedHeight : 70,-->
<!--        cover       : true,-->
<!--        focus       : 'center' as const,-->
<!--        isNavigation: true,-->
<!--        updateOnMove: true,-->
<!--    };-->

<!--    onMount( () => {-->
<!--        if ( main && thumbs ) {-->
<!--            main.sync( thumbs.splide );-->
<!--        }-->
<!--    } );-->
<!--</script>-->

<!--<section>-->
<!--  <Splide options={ thumbsOptions } bind:this={ thumbs }>-->
<!--    { #each slides as slide }-->
<!--      <SplideSlide>-->
<!--        <img src={ slide.src } alt={ slide.alt }>-->
<!--      </SplideSlide>-->
<!--    { /each }-->
<!--  </Splide>-->
<!--</section>-->
