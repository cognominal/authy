<script lang="ts" context="module">

    import type { Load } from '$types/index'

    export const load: Load = async (args) => {
      return {
        props: {
          user: args.session.user,
          id: ''
        },
      };
    }
  </script>
  <script lang="ts">
    export let user: string
  </script>
  

{#if user}
<h2>Welcome {user}</h2>
<a href="/logout">
  <button>Logout</button>
</a>
{:else}
<a href="/login">
  <button>Login using Github</button>
</a>
{/if}

