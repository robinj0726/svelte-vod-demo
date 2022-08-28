<script>
    import { LoadMediaList } from "./Requests.js";
    let listPromise = Promise.resolve([]);
    $: listPromise = LoadMediaList();
</script>

{#await listPromise}
    Loading…
{:then list}
    <ul>
        {#each list as el}
            <div>
                <a href={"/void/" + el}>{el}</a>
            </div>
        {/each}
    </ul>
{:catch err}
    {err}
{/await}
