
import type { Handle, GetSession } from '@sveltejs/kit'
import cookie from 'cookie' // do I need it or is it already provided by sveltkit ?

export const handle : Handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '')

  // code here happends before the endpoint or page is called

  const response = await  resolve(event)

  // code here happens after the endpoint or page is called
  
  response.headers.set('set-cookie', `user=${event.locals.username || ''}; Path=/; HttpOnly`)
  
  return response
}

// the type of the Session object comes from `src/app.d.ts`
export const getSession: GetSession = (event) => {
  console.log('GETSESSION --------------- ' + event.locals.username);
  
	// if (!event.locals.username) return {}

	return {
		user:  event.locals.username,

	}
}

// export const handleError: HandleError = async ({ error, event }) => {
// 	// send error to an error tracking service
// }

// export const externalFetch: ExternalFetch = async (event) => {
// 	// add some authorisation headers etc.
// 	return fetch(request)
// }
