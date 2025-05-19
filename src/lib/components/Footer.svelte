<script>
    import {_} from 'svelte-i18n'


    const footerSections = [
    {
      title: $_('footer.contact'),
      links: [
        { name: "+33 6 38 61 77 95", href: "#" },
        { name: "k.p.batiment@gmail.com", href: "#" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { name: "Privacy Policy", href: "https://docs.google.com/document/d/1bnxOXVHx54XLblR6ZMMVRtHaewmt3CC4fmrkdvxEdEA/edit" },
      ],
    },
    {
      title: "Social Media",
      links: [
        { name: "Instagram", href: "https://www.instagram.com/kp_bat/" },
        { name: "Facebook", href: "https://www.facebook.com/kpbat" },
        { name: "Pinterest", href: "https://fr.pinterest.com/kp_bat/" },
      ],
    },
  ];
</script>

<footer class="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">

      <div class="lg:flex-1 w-full">
        <h2 class="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
          {$_('footer.title')}
        </h2>
        <p class="text-white text-sm md:text-base mb-10 max-w-3xl">
          {$_('footer.desc')}
        </p>
      </div>

      <div class="w-full lg:w-[500px] flex-shrink-0">
        <img src="/img/carousel/1.jpg" alt="img-2" class="rounded-[20px] md:rounded-[30px] lg:rounded-[40px] w-full object-cover h-[250px] md:h-[350px] lg:h-[100%]" />
      </div>
    </div>

    <div class="mt-16 flex flex-col lg:flex-row justify-between gap-10">

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-1">
        {#each footerSections as section}
          <div>
            <h3 class="text-lg font-semibold mb-4">{section.title}</h3>
            <ul class="space-y-2">
              {#each section.links as link}
                <li>
                  <a href={link.href} class="text-white hover:text-opacity-70 text-sm">{link.name}</a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>

      <div class="flex flex-col items-center lg:items-end text-center lg:text-right">
        <p class="text-5xl md:text-7xl font-bold">KPBAT</p>
        <p class="text-sm md:text-base">&copy; 2022 - {new Date().getFullYear()} KP BAT. All Rights Reserved</p>
        <span class="opacity-70 text-sm">Design and code - <a href="https://github.com/Braspi/" class="underline">Jeremiasz Cz.</a></span>
        <p class="opacity-70 text-xs">last update - 2025</p>
      </div>
    </div>

  </div>
</footer>

