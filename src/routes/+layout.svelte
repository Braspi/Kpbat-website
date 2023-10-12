<script lang="ts">
    import "../app.css";
    import '@splidejs/svelte-splide/css';
    import "../i18n.ts";

    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Maintenance from "$lib/components/maintenance/Maintenance.svelte";
    import {onMount} from "svelte";

    let isMaintenance = true;
    onMount(()=>{
        isMaintenance = localStorage.getItem("devMode") == null;
    })

</script>


{#if !isMaintenance}
  <Nav />
  <slot />
  <Footer />
{:else }
  <Maintenance />
{/if}
