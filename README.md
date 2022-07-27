## Typescript code to use github oauth in sveltekit

Authy uses 
[typescript](https://typescriptlang) instead of js.
It is a standalone web app that handles login and logout thru github
by managing a session cookie [[1]](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)[[2]](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie). Nothing else.
It is intended as code to be insered in a larger sveltekit app
to provide login service. Maybe will be someday 
a svelte component.

To have it working you must register it as an app [[1]](https://github.com/settings/applications/new)[[2]](https://docs.github.com/en/rest/guides/basics-of-authentication) to github
and provide an `.env` [file](https://vitejs.dev/guide/env-and-mode.html#env-files) with the placeholders replaced 
by the appropriate values.

    VITE_CLIENT_ID=XXXX
    VITE_CLIENT_SECRET=YYY


## This is an adaptation of an existing work

This code is an ongoing adaptation of a
[demo oauth app](https://blog.hyper.io/sveltekit-authentication/)
but to a more recent [sveltekit](https://sveltekit) version. 

### See the original work

For the general principles, see the [article](https://blog.hyper.io/sveltekit-authentication/) and watch the [video](https://www.youtube.com/watch?v=D4ZcbudB1n0).


### Some context

Sveltekit does scaffolding and provides  services to build reactive sites. 
It is build on top of vite of [vite](https://vitejs.dev/).
and uses [svelte](https://svelte.dev/tutorial/basics) components


### CAVEATS

This started as an exercise to learn sveltekit and to translate something to typescript but it is useful in its own right even if the code is 
probably naive and clusmsy. Error handling is missing.

Probably this should work with other oauth providers. The registration
to these providers should be automated. 
And handling of passwords could be directly supported instead of
relying into a third party.
Patches welcome.

Sveltekit is a fast moving target. So this code will probably bitrot very fast. Use this code at your own risks. You have been warned. 

## incomplete

Below are incomplete notes that need to be converted into [mermaid](https://mermaid-js.github.io/mermaid/#/) graphs

`src/routes/login.ts` and `src/routes/callback.ts` are endpoints
without corresponding `.svelte` files because they are redirects.

The `GET` in the callback  initiated by github in response to the login.


it passes the code search
called by src/routes/login.ts https://github.com/login/oauth/authorize?client_id=4f398de41d610156dc90&state=1234
callback handled by      src/routes/callback.ts        

- Success http://localhost:5173/callback?code=aed77bb3f8d85be53c36&state=1234
- Error  http://localhost:5173/callback?error=access_denied&error_description=The+user+has+denied+your+application+access.&error_uri=https%3A%2F%2Fdocs.github.com%2Fapps%2Fmanaging-oauth-apps%2Ftroubleshooting-authorization-request-errors%2F%23access-denied&state=1234