<script>
    import "../app.css";
    import '@splidejs/svelte-splide/css';
    import "../i18n.ts";

    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import FormSection from "$lib/components/sections/FormSection.svelte";
</script>

<Nav />
<slot />
<FormSection/>
<Footer />
