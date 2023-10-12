<script>
    import { page } from '$app/stores';
    import {onMount} from "svelte";

    onMount(()=> {
        fetch(`https://api.kpbat.com/v1/gallery/categories/${$page.params.id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            }).catch(error => {
            console.log(error);
        });
    })
</script>
