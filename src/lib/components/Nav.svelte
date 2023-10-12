<script lang="ts">
    import { _, locale } from 'svelte-i18n'
    import Fa from 'svelte-fa';
    import { faBars } from '@fortawesome/free-solid-svg-icons';
    import { page } from "$app/stores";
    import {onMount} from "svelte";

    let navDetached = true;
    let showBurgerDiv: boolean = false;

    onMount(()=> {
        page.subscribe(() =>{
            if($page.url.pathname.includes('gallery')){
                navDetached = false;
                return
            }
            onScroll()
        })
    })

    function onScroll() {
        if($page.url.pathname.includes('gallery')){return}
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

<div id="nav" class="w-full h-24 fixed top-0 z-10 transition duration-500 text-light md:h-28 {navDetachedClass}">
    <a href="/">
        <img src="icon/logo/LOGO2_alpha.png" alt="logo" class="absolute select-none top-1 left-0 h-24 md:left-1 md:h-28 md:top-0.5">
    </a>
    <div class="hidden font-normal md:flex flex-col items-center h-full">
        <div class="mt-auto mb-auto">
            <a href="/" class="mt-14 text-2xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.home')}</a>
            <a href="/gallery" class="mt-14 ml-16 text-2xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.gallery')}</a>
            <a href="/#contact" class="mt-14 ml-16 text-2xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.contact')}</a>
        </div>
        <div class="absolute right-8 h-24 flex justify-around w-28 md:h-28 md:top-9">
            <div role="button" tabindex="0" on:click={() => changeLang("fr")} on:keypress={() => changeLang("fr")} class="w-14 h-9 p-1.5 cursor-pointer select-none hover:brightness-50">
                <img src="icon/flags/france.webp" alt="france-flag" class="w-full h-full">
            </div>
            <div role="button" tabindex="0" on:click={() => changeLang("en")} on:keypress={() => changeLang("en")} class="w-14 h-9 p-1.5 cursor-pointer select-none hover:brightness-50">
                <img src="icon/flags/united_kingdom.webp" alt="english-flag" class="w-full h-full">
            </div>
        </div>
    </div>

    <div class="block md:hidden absolute top-1/2 -translate-y-1/2 right-8 z-40 cursor-pointer" on:click={showBurger} on:keypress={showBurger} role="button" tabindex="0">
        <Fa icon={faBars} size="3x"/>
    </div>

    {#if showBurgerDiv}
        <div class="w-screen h-screen bg-dark absolute top-0 z-30 flex flex-col items-center justify-around">
            <div class="flex flex-col w-max text-center gap-7">
                <a href="/" class="mt-10 text-4xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.home')}</a>
                <a href="/gallery" class="mt-10 text-4xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.gallery')}</a>
                <a href="/#contact" class="mt-10 text-4xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.contact')}</a>
            </div>
            <div class="">
                <h2 class="text-3xl font-semibold text-center mb-10">{$_('nav.language')}:</h2>
                <div class="h-24 flex justify-around w-96">
                    <div role="button" tabindex="0" on:click={() => changeLang("fr")} on:keypress={() => changeLang("fr")} class="w-auto h-20 p-1.5 cursor-pointer select-none hover:brightness-50">
                        <img src="icon/flags/france.webp" alt="france-flag" class="w-full h-full">
                    </div>
                    <div role="button" tabindex="0" on:click={() => changeLang("en")} on:keypress={() => changeLang("en")} class="w-auto h-20 p-1.5 cursor-pointer select-none hover:brightness-50">
                        <img src="icon/flags/united_kingdom.webp" alt="english-flag" class="w-full h-full">
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>

<!-- Attach scroll to document -->
<svelte:document on:scroll={onScroll} />
