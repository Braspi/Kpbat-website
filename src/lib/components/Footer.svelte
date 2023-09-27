<script lang="ts">
    import { _ } from 'svelte-i18n'

    import Fa from 'svelte-fa';
    import {  } from '@fortawesome/free-solid-svg-icons';
    import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

</script>

<div class="w-full bg-dark text-light relative h-128 sm:h-60 md:h-80" >
    <a href="/" >
        <img src="icon/logo/LOGO3.jpg" alt="logo-left" class="absolute hidden md:left-16 xl:left-24 md:h-36 md:top-10 md:inline-block">
    </a>

    <div class="flex justify-around flex-wrap m-auto w-1/2 md:w-1/3 whitespace-nowrap">
        <a href="/" class="mt-32 -translate-y-1/2 text-2xl uppercase break-all hover:text-hoverColor transition duration-100 xl:text-3xl 2xl:text-4xl"> {$_('footer.home')}</a>
        <a href="/gallery" class="mt-32 -translate-y-1/2 text-2xl uppercase break-all hover:text-hoverColor transition duration-100 xl:text-3xl"> {$_('footer.gallery')}</a>
        <a href="/#contact" class="mt-32 -translate-y-1/2 text-2xl uppercase break-all hover:text-hoverColor transition duration-100 xl:text-3xl"> {$_('footer.contact')}</a>
    </div>

<!--    <div class="">-->
<!--        <a href="https://www.facebook.com/kpbat"><Fa icon="{ faFacebook }" /></a>-->
<!--        <a href="https://www.instagram.com/kp_bat/"><Fa icon="{ faInstagram }" /></a>-->
<!--        <a href="https://www.pinterest.fr/kp_bat/"><Fa icon="{ faPinterest }" /></a>-->
<!--    </div>-->

</div>