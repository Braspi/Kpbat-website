<script>
    import "../app.css";
    import '@splidejs/svelte-splide/css';

    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "../i18n.ts";
</script>

<Nav />
<slot />
<Footer />
