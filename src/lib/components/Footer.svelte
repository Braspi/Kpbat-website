<script lang="ts">
    import { _ } from 'svelte-i18n'
    import Fa from 'svelte-fa';
    import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
</script>

<section class="w-full bg-dark text-light relative h-128 sm:h-52 md:h-72" >
    <a href="/" >
        <img src="/icon/logo/LOGO3.jpg" alt="logo-left" class="absolute w-32 left-[10%] top-[7%] sm:left-[5%] md:w-40 lg:w-44 lg:h-36 md:top-10 md:inline-block">
    </a>
    <div class="flex flex-col items-center absolute text-lg right-[15%] top-[10%] sm:flex-row sm:right-[30%] sm:top-[28%] sm:gap-4 md:text-2xl md:right-[29%] md:top-[32%] lg:right-[29%] lg:top-[35%] lg:gap-14 xl:text-3xl xl:right-[36%]">
        <a href="/" class="uppercase hover:text-hoverColor transition duration-100"> {$_('footer.home')}</a>
        <a href="/gallery" class="uppercase hover:text-hoverColor transition duration-100"> {$_('footer.gallery')}</a>
        <a href="/#contact" class="uppercase hover:text-hoverColor transition duration-100"> {$_('footer.contact')}</a>
    </div>
    <div class="flex flex-row gap-2 absolute text-2xl top-[35%] left-1/2 -translate-x-1/2 sm:left-[85%] sm:top-[24%] md:left-[88%] md:text-3xl md:top-[29%] lg:text-4xl xl:top-[30%]">
        <a href="https://www.facebook.com/kpbat" aria-label="facebook-link" class="w-10 h-10 bg-mediaColor md:w-11 md:h-11 lg:w-14 lg:h-14 rounded hover:scale-110 transform transition-transform duration-300"><Fa icon="{ faFacebook }" class="text-white ml-2 mt-2 md:ml-2 md:mt-2 lg:ml-2.5 lg:mt-2.5 "/></a>
        <a href="https://www.instagram.com/kp_bat/" aria-label="instagram-link"  class="w-10 h-10 bg-mediaColor md:w-11 md:h-11 lg:w-14 lg:h-14 rounded hover:scale-110 transform transition-transform duration-300"><Fa icon="{ faInstagram }" class="text-white ml-2 mt-2 md:ml-2.5 md:mt-2 lg:ml-3 lg:mt-2.5"/></a>
        <a href="https://www.pinterest.fr/kp_bat/" aria-label="pin-link" class="w-10 h-10 bg-mediaColor md:w-11 md:h-11 lg:w-14 lg:h-14 rounded hover:scale-110 transform transition-transform duration-300"><Fa icon="{ faPinterest }" class="text-white ml-2 mt-2 md:ml-2 md:mt-2 lg:ml-2.5 lg:mt-2.5"/></a>
    </div>
    <hr class="absolute left-1/2 -translate-x-1/2 border-t-2 w-[85%] top-[47%] sm:w-[91%] sm:top-[65%] md:top-[75%]">
    <div class="absolute left-1/2 -translate-x-1/2 text-ms bottom-24 font-medium text-center sm:text-left sm:w-[52%] sm:left-[30%] sm:bottom-4 sm:text-xs sm:font-normal md:bottom-8 md:left-[31%] lg:text-sm lg:bottom-6 lg:w-[55%] lg:left-[33%] lg:font-medium xl:text-base">
        <p class="sm:inline-block">+33 6 38 61 77 95</p>
        <p class="sm:inline-block">k.p.batiment@gmail.com</p>
        <div class="text-center mt-1 text-xs sm:mt-0 sm:text-left md:whitespace-nowrap">
            <p class="sm:inline-block">SASU KP BAT - <span class="underline"><a href="https://maps.app.goo.gl/5Z5Kp3jBmEkJALSX7">85 Boulevard du Général Leclerc</a></span>, 92000 Nanterre, France</p>
            <p class="font-medium mt-3 sm:mt-0 sm:hidden lg:inline-block">SIREN - 898 355 763</p>
        </div>
    </div>
    <div class="absolute left-1/2 -translate-x-1/2 font-medium text-center text-xs w-[60%] bottom-8 sm:left-[75%] sm:text-end sm:w-[40%] lg:text-sm lg:w-[30%] lg:left-[80%] lg:bottom-6 xl:w-[23%] xl:left-[83%]">
        <p>&copy; 2022 - { new Date().getFullYear() } KP BAT. All Rights Reserved </p>
        <span>Design and code -</span>
        <a href="https://ycode.ovh" class="underline">ycode.pl</a>
    </div>
</section>
