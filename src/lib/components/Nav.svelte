<script lang="ts">
    import { _ } from 'svelte-i18n'
    import { locale } from 'svelte-i18n'
    let navDetached = true;

    function onScroll() {
        let header = document.getElementById('nav')?.getBoundingClientRect() as DOMRect;
        navDetached = (header.height / 8) > window.scrollY;
    }
    $: navDetachedClass = navDetached ? '' : 'bg-dark shadow-nav';

    function changeLang(lang:string) {
        locale.set(lang)
    }

    import Fa from 'svelte-fa';
    import {  } from '@fortawesome/free-solid-svg-icons';
    import {  } from '@fortawesome/free-brands-svg-icons';

</script>

<div id="nav" class="w-full h-24 fixed top-0 z-10 transition duration-500 text-light md:h-28 {navDetachedClass}">
    <a href="/">
        <img src="icon/logo/LOGO2_alpha.png" alt="logo" class="absolute select-none top-1 left-0 h-24 md:left-1 md:h-28 md:top-0.5">
    </a>
    <div class="hidden font-normal md:flex flex-col items-center h-full">
        <div class="mt-auto mb-auto">
            <a href="/" class="mt-14 text-2xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.home')}</a>
            <a href="/" class="mt-14 ml-16 text-2xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.gallery')}</a>
            <a href="/" class="mt-14 ml-16 text-2xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.contact')}</a>
        </div>
        <div class="absolute right-8 h-24 flex justify-around w-28 md:h-28 md:top-9">
            <img src="icon/flags/france.webp" alt="france-flag" class="w-14 h-9 p-1.5 cursor-pointer select-none hover:brightness-50" on:click={() => changeLang("fr")}>
            <img src="icon/flags/united_kingdom.webp" alt="english-flag" class="w-14 h-9 p-1.5 cursor-pointer select-none hover:brightness-50" on:click={() => changeLang("en")}>
        </div>
    </div>


</div>

<!-- Attach scroll to document -->
<svelte:document on:scroll={onScroll} />

<!--<div class="bg-amber-200 sm:bg-green-500 md:bg-black xl:bg-amber-950"> asdasdasd</div>-->
