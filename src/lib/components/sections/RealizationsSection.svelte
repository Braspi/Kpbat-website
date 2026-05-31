<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  const rawStats = [
    { value: 200, label: "Projects", suffix: "+" },
    { value: 180, label: "Satisfied Customers", suffix: "+" },
    { value: 1, label: "Top 1 in Paris", suffix: "st" }
  ];

  const stores = rawStats.map(() =>
          tweened(0, { duration: 1500, easing: cubicOut })
  );

  let values = stores.map(() => 0);

  stores.forEach((store, i) => {
    store.subscribe(val => {
      values[i] = val;
    });
  });

  let hasAnimated = false;

  let sectionRef;

  onMount(() => {
    const observer = new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting && !hasAnimated) {
                hasAnimated = true;
                rawStats.forEach((stat, i) => {
                  setTimeout(() => {
                    stores[i].set(stat.value);
                  }, i * 200);
                });
              }
            },
            { threshold: 0.3 }
    );

    if (sectionRef) observer.observe(sectionRef);

    return () => {
      if (sectionRef) observer.unobserve(sectionRef);
    };
  });
</script>

<section bind:this={sectionRef} class="py-16 bg-white">
  <div class="container mx-auto px-12">
    <div class="flex justify-between flex-wrap gap-8">
      {#each rawStats as stat, i}
        <div class="p-6">
          <p class="text-7xl xl:text-8xl 2xl:text-9xl font-medium text-black mb-2">
            {Math.floor(values[i])}{stat.suffix}
          </p>
          <p class="text-xl text-black opacity-80">{stat.label}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
