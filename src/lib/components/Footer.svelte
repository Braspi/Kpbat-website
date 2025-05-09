<script>
  const footerSections = [
    {
      title: "Contact",
      links: [
        { name: "+33 6 38 61 77 95", href: "#" },
        { name: "k.p.batiment@gmail.com", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { name: "Prices and Payments", href: "#" },
        { name: "Shipping", href: "#" },
        { name: "Return Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
    {
      title: "Social Media",
      links: [
        { name: "Instagram", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "LinkedIn", href: "#" },
      ],
    },
  ];
</script>

<footer class="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
  <div class="px-[12vw] mx-auto">
    <div class="flex justify-around">
      <div class="flex-1">
        <h2 class="text-7xl font-bold text-white mb-8">Engage with Us in Conversation.</h2>
        <p class="text-white mb-12 max-w-3xl">
          In a global world based on communication, a brand must look beyond its borders, open up to new experiences, and dare to be different. Meeting the brightest minds of one's time is the most effective way to nurture creativity.
        </p>
      </div>
      <div class="flex-2">
        <img src="img/carousel/1.jpg" class="rounded-[30px] lg:rounded-[40px] z-0 w-full h-full lg:w-[500px] object-cover" alt="img-2">

      </div>
    </div>

    <div class="flex">
      <div class="grid flex-2 grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {#each footerSections as section}
          <div>
            <h3 class="text-lg font-semibold mb-4">{section.title}</h3>
            <ul class="space-y-2">
              {#each section.links as link}
                <li><a href={link.href} class="text-white hover:text-opacity-70">{link.name}</a></li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
      <div class="flex-1 flex flex-col justify-center items-end">
        <p class="text-8xl font-bold">KPBAT</p>
        <p>&copy; 2022 - { new Date().getFullYear() } KP BAT. All Rights Reserved </p>
        <span class="opacity-70">Design and code - <a href="https://github.com/Braspi/" class="underline">Jeremiasz Cz.</a></span>
      </div>
    </div>

  </div>
</footer>
