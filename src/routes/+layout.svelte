<script>
    import "../app.css";
    import '@splidejs/svelte-splide/css';

    import Nav from "$lib/components/Nav.svelte";
    import "../i18n.ts";
</script>

<Nav />
<main class="h-[2000px]">
    <slot />
</main>
