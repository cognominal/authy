<script lang="ts" context="module">
import type { Load } from '$types/__layout'

export const  load : Load = async (args) => {
  if (/^\/admin\/(.*)/.test(args.url.pathname) && args.session.user === '') {
    return { redirect: '/', status: 302 }
  }
  return { props: {} }
}
</script>




<slot />
 