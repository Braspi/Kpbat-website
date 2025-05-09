<script>
  import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import {_} from 'svelte-i18n'

  let phoneButtonText = 'Copy';
  let emailButtonText = 'Copy';

  function copyText(text, buttonType) {
    navigator.clipboard.writeText(text).then(() => {
      if (buttonType === 'phone') {
        phoneButtonText = 'Copied!';
      } else {
        emailButtonText = 'Copied!';
      }
      setTimeout(() => {
        if (buttonType === 'phone') {
          phoneButtonText = 'Copy';
        } else {
          emailButtonText = 'Copy';
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
          phoneButtonText = 'Copy';
        } else {
          emailButtonText = 'Copy';
        }
      }, 2000);
    });
  }
</script>

<section class="px-16 my-16">
  <div class="flex flex-col lg:flex-row gap-6 mb-10">

    <div class="flex-1 flex flex-col items-start justify-start">
      <button class="mb-4 flex items-center gap-2 text-md font-medium bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
        <a href="mailto:k.p.batiment@gmail.com" class="flex items-center gap-2">
          <Fa icon={faArrowRight} class="my-1" />
          Contact
        </a>
      </button>
      <p class="text-gray-600 w-full max-w-md">
        Have a question or a project in mind? We're here to help, feel free to reach out and we'll get back to you as soon as possible.
      </p>
    </div>

    <div class="flex-1 flex justify-end">
      <h2 class="text-5xl lg:text-7xl font-semibold leading-tight text-right max-w-[50vw]">
        Let’s build something great together
      </h2>
    </div>
  </div>

  <div>
    <div class="flex justify-around gap-4 pt-12 ">
      <div class="flex flex-col justify-center h-[200px] rounded-[40px]">
        <p class="text-black text-5xl">Phone Number</p>
        <p class="font-bold text-left text-2xl">+33 6 38 61 77 95</p>
        <button
                class="text-left text-lg w-fit  cursor-pointer bg-black text-white px-6 my-4 py-2 rounded hover:bg-gray-800 transition"
                on:click={() => copyText('+33 6 38 61 77 95', 'phone')}
                on:keydown={(e) => e.key === 'Enter' && copyText('+33 6 38 61 77 95', 'phone')}
                aria-label="Copy phone number"
        >
          {phoneButtonText}
        </button>
      </div>

      <div class="flex flex-col justify-center items-end h-[200px] rounded-[40px]">
        <p class="text-black text-5xl">Email Address</p>
        <p class="font-bold text-2xl text-right">k.p.batiment@gmail.com</p>
        <button
                class="text-left text-lg w-fit  cursor-pointer bg-black text-white px-6 my-4 py-2 rounded hover:bg-gray-800 transition"
                on:click={() => copyText('k.p.batiment@gmail.com', 'email')}
                on:keydown={(e) => e.key === 'Enter' && copyText('k.p.batiment@gmail.com', 'email')}
                aria-label="Copy email address"
        >
          {emailButtonText}
        </button>
      </div>
    </div>
  </div>
</section>
