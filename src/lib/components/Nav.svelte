<script>
    import { _ } from 'svelte-i18n'

    // function onScroll() {
    //     let header = document.getElementById('nav').getBoundingClientRect();
    //     this.navDetached = (header.height / 8) > window.pageYOffset;
    // }
</script>

<div id="nav" class="w-full h-28 text-dark fixed top-0 z-10 transition bg-opacity-50 bg-dark text-light">
    <a href="/">
        <img src="icon/logo/LOGO2_alpha.png" alt="logo" class="absolute top-0.5 -translate-y-2 select-none left-0 h-24 md:left-2 md:h-32">
    </a>
    <div class="hidden sm:block font-normal xl:flex flex-col items-center  h-full">
        <div class="mt-auto mb-auto">
            <a href="/" class="mt-14 text-2xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.home')}</a>
            <a href="/" class="mt-14 ml-16 text-2xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.gallery')}</a>
            <a href="/" class="mt-14 ml-16 text-2xl no-underline uppercase hover:text-hoverColor transition duration-100">{$_('nav.contact')}</a>
        </div>
    </div>
    <div class="">

    </div>
</div>


<!--<div class="bg-amber-200 sm:bg-green-500 md:bg-black xl:bg-amber-950"> asdasdasd</div>-->