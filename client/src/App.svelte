<script>
  import FileList from "./lib/FileList.svelte";
  import { LoadMediaList } from "./lib/Requests.js";
  let listPromise = Promise.resolve([]);
  $: listPromise = LoadMediaList();
</script>

<header>
    <h1>VOD Demo</h1>
</header>
<main>
  <button
    class="refresh-btn"
    on:click={() => {
      listPromise = LoadMediaList();
    }}>Refresh</button
  >
  {#await listPromise}
    <!-- Loading… -->
  {:then list}
    <FileList files={list} />
  {:catch err}
    {err}
  {/await}
</main>

<style>
</style>
