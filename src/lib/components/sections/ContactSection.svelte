<script>
  import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import {_} from 'svelte-i18n'

  let phoneButtonText = $_('contact.copy-btn');
  let emailButtonText = $_('contact.copy-btn');

  function copyText(text, buttonType) {
    navigator.clipboard.writeText(text).then(() => {
      if (buttonType === 'phone') {
        phoneButtonText = $_('contact.copied-btn');
      } else {
        emailButtonText = $_('contact.copied-btn');
      }
      setTimeout(() => {
        if (buttonType === 'phone') {
          phoneButtonText = $_('contact.copy-btn');
        } else {
          emailButtonText = $_('contact.copy-btn');
        }
      }, 2000);
    }).catch(err => {
      if (buttonType === 'phone') {
        phoneButtonText = 'Error';
      } else {
        emailButtonText = 'Error';
      }
      setTimeout(() => {
        if (buttonType === 'phone') {
          phoneButtonText = $_('contact.copy-btn');
        } else {
          emailButtonText = $_('contact.copy-btn');
        }
      }, 2000);
    });
  }
</script>

<section id="contact" class="px-4 sm:px-8 md:px-12 lg:px-16 my-16">
  <div class="flex flex-col lg:flex-row gap-6 mb-10">
    <div class="flex-1 flex flex-col items-start justify-start">
      <button class="mb-4 flex items-center gap-2 text-sm sm:text-md font-medium bg-black text-white px-4 sm:px-6 py-2 rounded hover:bg-gray-800 transition">
        <a href="mailto:k.p.batiment@gmail.com" class="flex items-center gap-2">
          <Fa icon={faArrowRight} class="my-1" />
          {$_('contact.title')}
        </a>
      </button>
      <p class="text-gray-600 w-full max-w-full sm:max-w-md text-sm sm:text-base">
        {$_('contact.desc')}
      </p>
    </div>

    <div class="flex-1 flex justify-start lg:justify-end">
      <h2 class="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight text-left lg:text-right max-w-full lg:max-w-[50vw]">
        {$_('contact.desc2')}
      </h2>
    </div>
  </div>

  <div class="pt-12">
    <div class="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
      <div class="flex flex-col justify-center h-auto md:h-[200px] rounded-[40px] w-full md:w-1/2">
        <p class="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{$_('contact.phone')}</p>
        <p class="font-bold text-left text-xl sm:text-2xl mt-2">+33 6 38 61 77 95</p>
        <button
            class="text-left text-base sm:text-lg w-fit cursor-pointer bg-black text-white px-4 sm:px-6 my-4 py-2 rounded hover:bg-gray-800 transition"
            on:click={() => copyText('+33 6 38 61 77 95', 'phone')}
            on:keydown={(e) => e.key === 'Enter' && copyText('+33 6 38 61 77 95', 'phone')}
            aria-label="{$_('contact.copy-phone')}"
        >
          {phoneButtonText}
        </button>
      </div>

      <div class="flex flex-col justify-center items-end h-auto md:h-[200px] rounded-[40px] w-full md:w-1/2">
        <p class="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-right">{$_('contact.email')}</p>
        <p class="font-bold text-xl sm:text-2xl text-right mt-2">k.p.batiment@gmail.com</p>
        <button
            class="text-left text-base sm:text-lg w-fit cursor-pointer bg-black text-white px-4 sm:px-6 my-4 py-2 rounded hover:bg-gray-800 transition"
            on:click={() => copyText('k.p.batiment@gmail.com', 'email')}
            on:keydown={(e) => e.key === 'Enter' && copyText('k.p.batiment@gmail.com', 'email')}
            aria-label="{$_('contact.copy-email')}"
        >
          {emailButtonText}
        </button>
      </div>
    </div>
  </div>
</section>

