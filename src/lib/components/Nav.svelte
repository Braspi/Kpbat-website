<script lang="ts">
    import { _, locale } from 'svelte-i18n';
    import Fa from 'svelte-fa';
    import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
    import { page } from "$app/stores";
    import { onMount, onDestroy } from "svelte";

    let navDetached = true;
    let showBurgerDiv = false;

    function changeLang(lang: string) {
        locale.set(lang);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('lang', lang);
        }
    }

    onMount(() => {
        if (typeof localStorage !== 'undefined') {
            const savedLang = localStorage.getItem('lang');
            if (savedLang) {
                locale.set(savedLang);
            }
        }

        const unsubscribe = page.subscribe(($page) => {
            if (typeof window === 'undefined') return;

            if ($page.url.pathname.includes('gallery') || $page.url.pathname.includes('services')) {
                navDetached = false;
            } else {
                onScroll();
            }
        });

        return () => {
            unsubscribe();
        };
    });

    onDestroy(() => {
        if (typeof document !== 'undefined') {
            document.body.classList.remove('overflow-hidden');
        }
    });

    $: if (typeof document !== 'undefined') {
        if (showBurgerDiv) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }

    function onScroll() {
        if (typeof window === 'undefined' || typeof document === 'undefined') return;

        if ($page.url.pathname.includes('gallery') || $page.url.pathname.includes('services')) {
            return;
        }
        const header = document.getElementById('nav')?.getBoundingClientRect();
        if (header) {
            navDetached = (header.height / 8) > window.scrollY;
        }
    }

    function showBurger() {
        showBurgerDiv = !showBurgerDiv;
    }
</script>



<div id="nav"
     class="w-full h-24 relative top-0 z-10 transition duration-500 md:h-[85px] text-black flex items-center justify-between px-4 md:px-11">
  <a href="/" class="flex items-center">
    <img src="/icon/logo/LOGO2-black-alpha.webp" alt="logo" class="select-none h-[75px] -translate-x-4 md:-translate-x-0 ml-6 md:h-[92px]">
  </a>

  <div class="flex gap-6 items-center">
    <div class="hidden md:flex space-x-8 text-xl font-medium opacity-80">
      <a href="/" class="no-underline hover:text-hoverColor transition duration-100">{$_('nav.home')}</a>
      <a href="/gallery" class="no-underline hover:text-hoverColor transition duration-100">{$_('nav.gallery')}</a>
      <a href="/#contact" class="no-underline hover:text-hoverColor transition duration-100">{$_('nav.contact')}</a>
    </div>

    <div class="hidden md:flex border-r border-opacity-30 border-black h-8" />

    <div class="hidden md:flex space-x-2">
      <div role="button" tabindex="0" on:click="{() => changeLang('fr')}" on:keypress="{() => changeLang('fr')}"
           class="w-14 h-9 p-1.5 cursor-pointer select-none hover:brightness-50 transition duration-100">
        <img src="/icon/flags/france.webp" loading="lazy" alt="france-flag" class="w-full h-full">
      </div>
      <div role="button" tabindex="0" on:click="{() => changeLang('en')}" on:keypress="{() => changeLang('en')}"
           class="w-14 h-9 p-1.5 cursor-pointer select-none hover:brightness-50 transition duration-100">
        <img src="/icon/flags/united_kingdom.webp" loading="lazy" alt="english-flag" class="w-full h-full">
      </div>
    </div>
  </div>

  <button class="block md:hidden cursor-pointer -translate-x-6 translate-y-1" on:click={showBurger} on:keypress={showBurger} tabindex="0" aria-label="Open menu">
    <Fa icon={faBars} size="2x"/>
  </button>

  {#if showBurgerDiv}
    <div class="fixed inset-0 w-full h-full bg-black/70 backdrop-blur-2xl flex flex-col items-center pt-20 pb-10 px-6 space-y-10 z-30 text-white animate-fade-in">

      <button
          class="absolute top-8 right-9 text-4xl hover:text-hoverColor transition duration-150"
          on:click={showBurger}
          aria-label="Close menu">
        <Fa icon={faXmark} size="lg"/>
      </button>

      <img src="/icon/logo/LOGO1_alpha.webp" alt="logo"
           class="h-28 mb-6 opacity-90 drop-shadow-md pointer-events-none select-none" />

      <nav class="flex flex-col items-center space-y-6">
        <a href="/" on:click={showBurger}
           class="text-2xl font-medium uppercase tracking-wide no-underline hover:text-hoverColor transition duration-200">{$_('nav.home')}</a>
        <a href="/gallery" on:click={showBurger}
           class="text-2xl font-medium uppercase tracking-wide no-underline hover:text-hoverColor transition duration-200">{$_('nav.gallery')}</a>
        <a href="/#contact" on:click={showBurger}
           class="text-2xl font-medium uppercase tracking-wide no-underline hover:text-hoverColor transition duration-200">{$_('nav.contact')}</a>
      </nav>

      <div class="w-16 h-[1px] bg-white/30 my-6"></div>

      <div class="text-center">
        <h2 class="text-2xl font-light tracking-wide mb-4">{$_('nav.language')}:</h2>
        <div class="flex justify-center space-x-10">
          <div role="button" tabindex="0" on:click={() => changeLang('fr')} on:keypress={() => changeLang('fr')}
               class="w-16 h-10 cursor-pointer select-none hover:brightness-75 transition duration-150">
            <img src="/icon/flags/france.webp" alt="france-flag" class="w-full h-full rounded shadow" />
          </div>
          <div role="button" tabindex="0" on:click="{() => changeLang('en')}" on:keypress="{() => changeLang('en')}"
               class="w-20 h-20 cursor-pointer select-none hover:brightness-50">
            <img src="/icon/flags/united_kingdom.webp" alt="english-flag" class="w-full h-full">
          </div>
        </div>
      </div>
    </div>
  {/if}


</div>

<!-- Attach scroll to document -->
<svelte:document on:scroll={onScroll}/>
