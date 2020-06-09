<script>
  let message = "";
  let output;
</script>

<style>

</style>

<main
  class="flex flex-col p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8">
  <label
    class="block text-center text-2xl font-bold leading-7 sm:text-3xl
    sm:leading-9"
    for="message">
    Input your message
  </label>
  <div
    class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6
    lg:space-x-8">
    <div class="sm:w-1/2">
      <div class="bg-white overflow-hidden shadow rounded-lg h-72 sm:h-96">
        <div class="px-4 py-5 sm:p-6 h-full">
          <textarea
            class="form-textarea border-none w-full resize-none h-full"
            id="message"
            on:input={(e) => (output.scrollTop = e.target.scrollTop)}
            bind:value={message} />
        </div>
      </div>
    </div>
    <div class="sm:w-1/2">
      <div
        class="bg-white overflow-hidden shadow rounded-lg whitespace-pre-wrap
        h-72 sm:h-96">
        <div class="px-4 py-5 sm:p-6 h-full">
          <div class="break-words overflow-auto h-full" bind:this={output}>
            {#each message.split(' ') as word}
              {#if word.length > 2 && word.startsWith('_') && word.endsWith('_')}
                <i>{` ${word.substring(1, word.length - 1)}`}</i>
              {:else if word.length > 2 && word.startsWith('*') && word.endsWith('*')}
                <b>{` ${word.substring(1, word.length - 1)}`}</b>
              {:else if word.length > 2 && word.startsWith('~') && word.endsWith('~')}
                <s>{` ${word.substring(1, word.length - 1)}`}</s>
              {:else if word.length > 6 && word.substring(0, 3) === '```' && word.substring(word.length - 3, word.length) === '```'}
                <code>{` ${word.substring(3, word.length - 3)}`}</code>
              {:else}{` ${word}`}{/if}
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
