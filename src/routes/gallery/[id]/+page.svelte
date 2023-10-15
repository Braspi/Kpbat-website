<script lang="ts">
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { images } from "$lib/stores/store";
    import { categoryName } from "$lib/stores/store";

    let main: Splide;
    let thumbs: SplideSlide;

    const mainOptions = {
        type      : 'loop',
        perPage   : 1,
        perMove   : 0,
        gap       : '1rem',
        pagination: false,
        width     : '100vh'
    };

    const thumbsOptions = {
        type        : 'slide',
        rewind      : true,
        gap         : '1rem',
        pagination  : true,
        fixedWidth  : 110,
        fixedHeight : 70,
        cover       : true,
        focus       : 'center' as const,
        isNavigation: true,
        updateOnMove: true,
        arrows      : false
    };

    onMount( () => {
        if ( main && thumbs ) {
            main.sync( thumbs.splide );
        }
        fetch(`https://api.kpbat.com/v1/gallery/categories/${$page.params.id}`)
            .then(response => response.json())
            .then(data => {
                const slides = [];
                console.log(data.images)
                data.images.forEach(image =>{
                    slides.push({
                        src: `https://api.kpbat.com/resources/category_${image.category_id}/${image.file_name}`,
                        alt: image.file_name
                    })
                })
                images.set(slides)
                categoryName.set(data.display_name)
            }).catch(error => {
            console.log(error);
        });
    } );
</script>
<section class="min-h-screen bg-light">
  <div class="relative z-0 top-20 lg:top-24">
    <div class="m-auto my-10 text-center text-dark">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-normal">{ $categoryName }</h2>
    </div>
  </div>
  <div class="pt-4 flex items-center justify-center">
    <div class="wrapper">
      <Splide options={ mainOptions } bind:this={ main } aria-labelledby="thumbnails-example-heading" class="w-full mx-auto">
        { #each $images as slide }
          <SplideSlide>
            <img src={ slide.src } alt={ slide.alt } class="max-h-128 mx-auto object-cover">
          </SplideSlide>
        { /each }
      </Splide>

      <Splide options={ thumbsOptions } bind:this={ thumbs } class="pt-4">
        { #each $images as slide }
          <SplideSlide>
            <img src={ slide.src } alt={ slide.alt }>
          </SplideSlide>
        { /each }
      </Splide>
    </div>
  </div>
</section>
