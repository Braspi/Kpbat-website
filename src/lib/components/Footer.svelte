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

    <div class="flex flex-col text-center absolute right-2 top-12 w-1/2 sm:inline-block sm:top-20 sm:right-36 md:top-24 md:right-44 lg:top-28 lg:right-64 xl:right-1/4 ">
        <a href="/" class="text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase break-all hover:text-hoverColor transition duration-100"> {$_('footer.home')}</a>
        <a href="/gallery" class="text-lg sm:text-xl md:text-2xl sm:ml-3 xl:ml-7 lg:text-3xl uppercase break-all hover:text-hoverColor transition duration-100"> {$_('footer.gallery')}</a>
        <a href="/#contact" class="text-lg sm:text-xl md:text-2xl sm:ml-3 xl:ml-7 lg:text-3xl uppercase break-all hover:text-hoverColor transition duration-100"> {$_('footer.contact')}</a>
    </div>

    <div class="left-[33%] absolute max-w-xs bottom-80 flex space-x-2 sm:left-[79%] sm:bottom-32 sm:space-x-1 md:left-[80%] md:bottom-48">
        <a href="https://www.facebook.com/kpbat" class="inline-block w-10 h-10 bg-mediaColor text-2xl md:w-12 md:h-12 md:text-3xl rounded hover:scale-110 transform transition-transform duration-300"><Fa icon="{ faFacebook }" class="text-white ml-2 mt-2 md:ml-2.5 md:mt-2.5"/></a>
        <a href="https://www.instagram.com/kp_bat/" class="inline-block w-10 h-10 bg-mediaColor text-2xl md:w-12 md:h-12 md:text-3xl rounded hover:scale-110 transform transition-transform duration-300"><Fa icon="{ faInstagram }" class="text-white ml-2.5 mt-2 md:ml-2.5 md:mt-2.5"/></a>
        <a href="https://www.pinterest.fr/kp_bat/" class="inline-block w-10 h-10 bg-mediaColor text-2xl md:w-12 md:h-12 md:text-3xl rounded hover:scale-110 transform transition-transform duration-300"><Fa icon="{ faPinterest }" class="text-white ml-2 mt-2 md:ml-2.5 md:mt-2.5"/></a>
    </div>

<!--    <div class="left-[83%] absolute max-w-xs bottom-1/2">-->
<!--        <a href="https://www.facebook.com/kpbat" class="inline-block w-14 bg-mediaColor h-14 text-4xl rounded hover:scale-110 transform transition-transform duration-300"><Fa icon="{ faFacebook }" class="text-white ml-2.5 mt-2.5 "/></a>-->
<!--        <a href="https://www.instagram.com/kp_bat/" class="inline-block w-14 bg-mediaColor h-14 text-4xl rounded hover:scale-110 transform transition-transform duration-300"><Fa icon="{ faInstagram }" class="text-white ml-3 mt-2.5"/></a>-->
<!--        <a href="https://www.pinterest.fr/kp_bat/" class="inline-block w-14 bg-mediaColor h-14 text-4xl rounded hover:scale-110 transform transition-transform duration-300"><Fa icon="{ faPinterest }" class="text-white ml-2.5 mt-2.5"/></a>-->
<!--    </div>-->

    <hr class="absolute border-t-2 w-[75%] mt-52 left-1/2 transform -translate-x-1/2 sm:mt-40 sm:w-[95%] md:mt-48 lg:mt-56">

</div>