<script lang="ts">
    import { _ } from "svelte-i18n";
    import Fa from "svelte-fa";
    import { sections as s } from "$lib/utils/getSections";
    import {goto} from "$app/navigation";
    let sections = s;

    function redirectTo(id:number) {
        goto(`/services?id=${id}`);
    }

</script>

<section class="min-h-[60vh] pt-0.5 mb-14 xl:mb-0 bg-dark">
    <div class="m-auto my-10 text-center">
        <h2 class="text-2xl md:text-4xl lg:text-5xl font-light text-light">{$_("services.header")}</h2>
        <h3 class="text-sm md:text-xl lg:text-2xl text-light whitespace-normal">{$_("services.description")}</h3>
    </div>
    <div class="flex flex-col lg:flex-row flex-wrap w-full justify-center items-center pb-10">
        {#each sections as section}
            <div
                role="button"
                tabindex="0"
                class="bg-white w-96 h-72 p-8 my-2 mx-1 rounded-lg flex flex-col justify-center items-center bg-center bg-scroll bg-cover"
                style="{section.hovered ? `background-image: linear-gradient(45deg, rgba(42, 42, 42,0.7) 0%, rgba(69, 69, 69, 0.7) 100%), url('/img/ourservices/${section.id}.jpg')` : ''}"
                on:mouseover={() => section.hovered = true}
                on:focus={() => section.hovered = true}
                on:mouseout={() => section.hovered = false}
                on:blur={() => section.hovered = false}
                on:click={() => redirectTo(section.id)}
                on:keypress={() => redirectTo(section.id)}
            >
                <Fa icon={section.icon} class="{section.hovered ? 'text-white' : ''} text-4xl text-dark"/>
                <p class="text-2xl text-dark" class:text-white={section.hovered}>{$_(section.text)}</p>
            </div>
        {/each}
    </div>
</section>
