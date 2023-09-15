<script lang="ts">
    import { _ } from 'svelte-i18n'
    let navDetached = true;

    function onScroll() {
        let header = document.getElementById('nav')?.getBoundingClientRect() as DOMRect;
        navDetached = (header.height / 8) > window.scrollY;
    }

    $: navDetachedClass = navDetached ? '' : 'bg-dark shadow-nav';
</script>

<div id="nav" class="w-full h-28 fixed top-0 z-10 transition duration-500 text-light {navDetachedClass}">
    <a href="/">
        <img src="icon/logo/LOGO2_alpha.png" alt="logo" class="absolute top-0.5 -translate-y-2 select-none left-0 h-24 md:left-1 md:h-28">
    </a>
    <div class="hidden font-normal md:flex flex-col items-center h-full">
        <div class="mt-auto mb-auto">
            <a href="/" class="mt-14 text-2xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.home')}</a>
            <a href="/" class="mt-14 ml-16 text-2xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.gallery')}</a>
            <a href="/" class="mt-14 ml-16 text-2xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.contact')}</a>
        </div>
    </div>
    <div class="">

    </div>
</div>

<!-- Attach scroll to document -->
<svelte:document on:scroll={onScroll} />

<!--<div class="bg-amber-200 sm:bg-green-500 md:bg-black xl:bg-amber-950"> asdasdasd</div>-->
