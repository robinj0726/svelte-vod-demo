<script>
    export let files;
</script>

<ul>
    {#each files as el}
        <div>
            <a href={"/media/file/" + el} target="_blank">{el}</a>
        </div>
    {/each}
</ul>

