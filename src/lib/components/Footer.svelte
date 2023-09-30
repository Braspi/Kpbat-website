<script lang="ts">
    import { _ } from 'svelte-i18n'

    import Fa from 'svelte-fa';
    import {  } from '@fortawesome/free-solid-svg-icons';
    import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

</script>

<div class="w-full bg-dark text-light relative h-128 sm:h-60 md:h-80" >
    <a href="/" >
        <img src="icon/logo/LOGO3.jpg" alt="logo-left" class="absolute w-32 left-10 top-8 md:w-40 md:left-16 lg:w-44 lg:h-36 md:top-10 md:inline-block xl:left-24">
    </a>
    <div class="flex flex-col font-medium text-center absolute right-2 top-12 w-1/2 sm:inline-block sm:top-20 sm:right-36 md:top-24 md:right-44 lg:top-28 lg:right-64 xl:right-1/4">
        <a href="/" class="text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase break-all hover:text-hoverColor transition duration-100"> {$_('footer.home')}</a>
        <a href="/gallery" class="text-lg sm:text-xl md:text-2xl sm:ml-3 xl:ml-7 lg:text-3xl uppercase break-all hover:text-hoverColor transition duration-100"> {$_('footer.gallery')}</a>
        <a href="/#contact" class="text-lg sm:text-xl md:text-2xl sm:ml-3 xl:ml-7 lg:text-3xl uppercase break-all hover:text-hoverColor transition duration-100"> {$_('footer.contact')}</a>
    </div>
    <div class="left-[33%] absolute max-w-xs bottom-80 flex space-x-2 sm:left-[79%] sm:bottom-32 sm:space-x-1 md:left-[82%] md:bottom-[59%] lg:left-[80%] lg:bottom-[51%]">
        <a href="https://www.facebook.com/kpbat" class="inline-block w-10 h-10 bg-mediaColor text-2xl md:w-11 md:h-11 md:text-3xl lg:w-14 lg:h-14 lg:text-4xl rounded hover:scale-110 transform transition-transform duration-300"><Fa icon="{ faFacebook }" class="text-white ml-2 mt-2 md:ml-2 md:mt-2 lg:ml-2.5 lg:mt-2.5 "/></a>
        <a href="https://www.instagram.com/kp_bat/" class="inline-block w-10 h-10 bg-mediaColor text-2xl md:w-11 md:h-11 md:text-3xl lg:w-14 lg:h-14 lg:text-4xl rounded hover:scale-110 transform transition-transform duration-300"><Fa icon="{ faInstagram }" class="text-white ml-2 mt-2 md:ml-2.5 md:mt-2 lg:ml-3 lg:mt-2.5"/></a>
        <a href="https://www.pinterest.fr/kp_bat/" class="inline-block w-10 h-10 bg-mediaColor text-2xl md:w-11 md:h-11 md:text-3xl lg:w-14 lg:h-14 lg:text-4xl rounded hover:scale-110 transform transition-transform duration-300"><Fa icon="{ faPinterest }" class="text-white ml-2 mt-2 md:ml-2 md:mt-2 lg:ml-2.5 lg:mt-2.5"/></a>
    </div>
    <hr class="absolute border-t-2 w-[80%] mt-52 left-1/2 transform -translate-x-1/2 sm:mt-40 sm:w-[95%] md:mt-48 lg:mt-56">
<!--    <div class="absolute left-1/2 transform -translate-x-1/2 sm:left-44">-->
<!--        <p class="block mt-52 text-center sm:inline-block sm:mt-44">+33 6 38 61 77 95</p>-->
<!--        <p class="block font-medium text-center sm:inline-block">contact@kpbat.com</p>-->
<!--        <div class="mt-4 text-sm sm:mt-0 sm:inline-block">-->
<!--            <p class="text-center">SASU KP BAT - 85 Boulevard du Général Leclerc, 92000 Nanterre, France</p>-->
<!--            <p class="text-center font-medium mt-3">SIREN - 898 355 763</p>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="absolute bottom-0 mb-7 text-sm left-1/2 transform -translate-x-1/2 text-center">-->
<!--        <p class="">&copy; 2022 - KP BAT. All Rights Reserved</p>-->
<!--        <p>Design and code - <a href="https://ycode.ovh">ycode.ovh</a></p>-->
<!--    </div>-->
</div>