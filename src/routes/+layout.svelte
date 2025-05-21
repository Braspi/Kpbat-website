<script lang="ts">
  import "../app.css";
  import '@splidejs/svelte-splide/css';
  import "../i18n.ts";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { afterNavigate, beforeNavigate } from '$app/navigation';
  import { tick } from 'svelte';
  let loading = false;

  const MIN_LOADING_TIME = 500;

  beforeNavigate(() => {
      loading = true;
  });

  afterNavigate(async () => {
      const start = performance.now();
      await tick();
      const elapsed = performance.now() - start;
      const delay = MIN_LOADING_TIME - elapsed;
      if (delay > 0) {
          await new Promise(r => setTimeout(r, delay));
      }
      loading = false;
  });
</script>

{#if loading}
  <div class="h-screen w-screen overflow-hidden flex justify-center items-center flex-col">
    <img src="/icon/logo/LOGO2-black-alpha.png" alt="Loading..." class="h-32 animate-pulse" />
    <div class="flex gap-4 items-center">
      <div class="flex items-center text-lg font-medium text-black gap-1 animate-pulse -translate-y-6">
        <span class="dot dot1 text-dark">.</span>
        <span class="dot dot2 text-dark">.</span>
        <span class="dot dot3 text-dark">.</span>
      </div>
    </div>
  </div>
{/if}

<Nav/>
<slot/>
<Footer/>

<style>
    @keyframes blinkOut {
        0% { opacity: 1; }
        20% { opacity: 1; }
        40% { opacity: 0; }
        100% { opacity: 0; }
    }

    .dot {
        animation: blinkOut 1.5s infinite;
        font-size: 2rem;
        line-height: 1;
    }

    .dot1 {
        animation-delay: 0s;
    }

    .dot2 {
        animation-delay: 0.2s;
    }

    .dot3 {
        animation-delay: 0.4s;
    }
</style>


