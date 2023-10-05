<script>
    import "../app.css";
    import '@splidejs/svelte-splide/css';
    import "../i18n.ts";

    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import FormSection from "$lib/components/sections/FormSection.svelte";
    import ServicesSection from "$lib/components/sections/ServicesSection.svelte";
    import About from "$lib/components/sections/AboutSection.svelte";
</script>

<Nav />
<slot />
<About />
<ServicesSection />
<FormSection/>
<Footer />
