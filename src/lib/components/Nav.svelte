<script>
    import { _ } from 'svelte-i18n'

    function onScroll() {
        let header = document.querySelector('.home main').getBoundingClientRect();
        this.navDetached = window.pageYOffset < (header.height / 8)
    }
</script>

<div id class="w-full h-navHeight text-dark fixed top-0 z-10 transition bg-opacity-50 bg-dark">
    <a href="/">
        <img src="icon/logo/LOGO2_alpha.png" alt="logo" class="absolute top-0.5 -translate-y-2 select-none left-0 h-24 md:left-5 md:h-32">
    </a>
</div>


<!--<div class="bg-amber-200 sm:bg-green-500 md:bg-black xl:bg-amber-950"> asdasdasd</div>-->