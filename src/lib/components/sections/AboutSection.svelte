<script lang="ts">
import {_} from "svelte-i18n";
</script>

<section class="min-h-[70vh] xl:mb-0 bg-dark text-light">
    <div class="flex flex-col lg:flex-row">
      <div class="flex-[3] ml-[10%] mr-[10%] mt-[6%] lg:mr-0 ">
        <h2 class="font-extrabold text-lg tracking-widest leading-8 uppercase mb-2 2xl:text-xl">{$_('about.name')}</h2>
        <h3 class="not-italic font-bold text-4xl mb-7 2xl:text-5xl">{$_('about.title')}</h3>
        <p class="font-normal text-lg lg:text-base 2xl:text-2xl">
          {$_('about.line1')}
          <br> <br>
          {$_('about.line2')}
          <br> <br>
          {$_('about.line3')}
          <br> <br>
          {$_('about.line4')}
        </p>
      </div>
      <div class="flex-[3] m-[10%] lg:m-0 lg:mt-[7%]">
        <img src="img/1.jpg" alt="hi-png" class="h-[80%] mx-auto rounded-md shadow-inner lg:h-[75%] 2xl:">
      </div>
    </div>
</section>
