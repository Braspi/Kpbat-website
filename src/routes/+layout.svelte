<script>
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "../i18n.ts";
</script>

<Nav />
<main class="h-[2000px]">
    <slot />
</main>
<Footer />
