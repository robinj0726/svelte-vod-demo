<script>
    export let files;
</script>

<ul>
    {#each files as el}
        <div>
            <a href={"/vod/" + el}>{el}</a>
        </div>
    {/each}
</ul>

