<script lang="ts">
  import {_, locale} from 'svelte-i18n'
  import Fa from 'svelte-fa';
  import {faBars} from '@fortawesome/free-solid-svg-icons';
  import {page} from "$app/stores";
  import {onMount} from "svelte";

  let navDetached = true;
  let showBurgerDiv = false;

  onMount(() => {
    page.subscribe(() => {
      if ($page.url.pathname.includes('gallery') || $page.url.pathname.includes('services')) {
        navDetached = false;
        return
      }
      onScroll()
    })
  })

  function onScroll() {
    if ($page.url.pathname.includes('gallery') || $page.url.pathname.includes('services')) {
      return
    }
    let header = document.getElementById('nav')?.getBoundingClientRect() as DOMRect;
    navDetached = (header.height / 8) > window.scrollY;
  }

  $: navDetachedClass = navDetached ? '' : 'bg-dark shadow-nav';

  function changeLang(lang: string) {
    locale.set(lang)
  }

  function showBurger() {
    showBurgerDiv = !showBurgerDiv;
  }
</script>

<div id="nav"
     class="w-full h-24 fixed top-0 z-10 transition duration-500 md:h-[85px] {navDetachedClass} text-black flex items-center justify-between px-4 md:px-11">
  <a href="/" class="flex items-center">
    <img src="/icon/logo/LOGO2-black-alpha.png" alt="logo" class="select-none h-12 ml-6 md:h-[92px]">
  </a>

  <div class="flex gap-6 items-center">
    <div class="hidden md:flex flex-1 justify-end space-x-8 text-xl font-medium opacity-80">
      <a href="/" class="no-underline hover:text-hoverColor transition duration-100">{$_('nav.home')}</a>
      <a href="/gallery" class="no-underline hover:text-hoverColor transition duration-100">{$_('nav.gallery')}</a>
      <a href="/#contact" class="no-underline hover:text-hoverColor transition duration-100">{$_('nav.contact')}</a>
    </div>

    <div class="border-r border-opacity-30 border-black h-8"/>

    <div class="hidden md:flex space-x-2">
      <div role="button" tabindex="0" on:click="{() => changeLang('fr')}" on:keypress="{() => changeLang('fr')}"
           class="w-14 h-9 p-1.5 cursor-pointer select-none hover:brightness-50 transition duration-100">
        <img src="/icon/flags/france.webp" alt="france-flag" class="w-full h-full">
      </div>
      <div role="button" tabindex="0" on:click="{() => changeLang('en')}" on:keypress="{() => changeLang('en')}"
           class="w-14 h-9 p-1.5 cursor-pointer select-none hover:brightness-50 transition duration-100">
        <img src="/icon/flags/united_kingdom.webp" alt="english-flag" class="w-full h-full">
      </div>
    </div>
  </div>

  <div class="block md:hidden cursor-pointer" on:click={showBurger} on:keypress={showBurger} role="button" tabindex="0">
    <Fa icon={faBars} size="3x"/>
  </div>

  {#if showBurgerDiv}
    <div class="fixed inset-0 w-full h-full bg-dark flex flex-col items-center justify-center space-y-7 z-30">
      <a href="/"
         class="text-4xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.home')}</a>
      <a href="/gallery"
         class="text-4xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.gallery')}</a>
      <a href="/#contact"
         class="text-4xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.contact')}</a>

      <div class="text-center">
        <h2 class="text-3xl font-semibold mb-6">{$_('nav.language')}:</h2>
        <div class="flex space-x-10">
          <div role="button" tabindex="0" on:click="{() => changeLang('fr')}" on:keypress="{() => changeLang('fr')}"
               class="w-20 h-20 cursor-pointer select-none hover:brightness-50">
            <img src="/icon/flags/france.webp" alt="france-flag" class="w-full h-full">
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
