<script lang="ts">
    export let text: string;
    export let color: string;
    export let casing: string;
    export let weight: string;

    function parseColor() {
        return `bg-${color}Gradient`;
    }
</script>

{#if color == null}
    <span class="bg-loginGradient bg-clip-text text-transparent font-{weight} {casing}">
    { text }
    </span>
{:else }
    <span class="{parseColor()} bg-clip-text text-transparent font-{weight} {casing}">
    { text }
    </span>
{/if}