<script>
  import { _ } from 'svelte-i18n';
  import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  const sectionKeys = ['electricity', 'plumbing', 'insulation', 'masonry', 'flooring', 'windows'];

  const images = [
      { image: '/img/ourservices/1.jpg', heightClass: 'h-[240px] sm:h-[340px]' },
      { image: '/img/ourservices/2.jpg', heightClass: 'h-[240px] sm:h-[700px]' },
      { image: '/img/ourservices/3.jpg', heightClass: 'h-[240px] sm:h-[700px]' },
      { image: '/img/ourservices/4.jpg', heightClass: 'h-[240px] sm:h-[340px]' },
      { image: '/img/ourservices/5.jpg', heightClass: 'h-[240px] sm:h-[340px]' },
      { image: '/img/ourservices/6.jpg', heightClass: 'h-[240px] sm:h-[700px]' }
  ];


  const items = sectionKeys.map((key, index) => ({
    key,
    image: images[index].image,
    heightClass: images[index].heightClass
  }));
</script>


<section class="px-4 sm:px-8 md:px-12 pt-10 md:pt-16">
  <div class="flex flex-col lg:flex-row justify-between gap-6 mb-10">
    <h2 class="text-4xl md:text-5xl lg:text-7xl font-semibold lg:w-[40vw] leading-tight">
      {$_('our-services.title')}
    </h2>

    <div class="flex-1 flex flex-col items-start lg:items-end justify-end">
      <button class="mb-4 flex items-center gap-2 text-sm md:text-base font-medium bg-black text-white px-4 lg:px-4 lg:py-2 rounded hover:bg-gray-800 transition">
        {$_('our-services.btn')} <Fa icon={faArrowRight} class="my-3.5" />
      </button>
      <p class="text-left lg:text-right text-gray-600 w-full lg:w-[40vw] text-sm md:text-base">
        {$_('our-services.desc')}
      </p>
    </div>
  </div>

  <!-- Back to columns layout with responsive tuning -->
  <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 pt-6">
    {#each items as item}
      <div class="break-inside-avoid rounded-2xl overflow-hidden shadow hover:shadow-lg transition group relative">
        <div
            class={`w-full bg-cover bg-center ${item.heightClass}`}
            style={`background-image: url(${item.image});`}
        ></div>

        <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 text-white flex items-end">
          <h3 class="text-xl md:text-2xl font-medium">{$_(`our-services.sections.${item.key}.title`)}</h3>
        </div>

        <div class="absolute bottom-4 right-4 bg-white p-3 md:p-4 text-black rounded-full group-hover:bg-gray-200 transition">
          <Fa icon={faArrowRight} />
        </div>
      </div>
    {/each}
  </div>
</section>


