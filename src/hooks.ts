
import type { Handle, GetSession } from '@sveltejs/kit'
import cookie from 'cookie' // do I need it or is it already provided by sveltkit ?

export const handle : Handle = async ({ event, resolve }) => {
  const req = event.request
  const cookies = cookie.parse(req.headers.get('cookie') || '')

  // code here happens before the endpoint or page is called

  event.locals.user = cookies.user
  
  const response = await  resolve(event)

  // code here happens after the endpoint or page is called
  
  response.headers.set('set-cookie', `user=${event.locals.user || ''}; Path=/; HttpOnly`)
  
  return response
}


// the type of the Session object comes from `src/app.d.ts`
export const getSession: GetSession = (event) => {
	return {
		user:  event.locals.user,

	}
}
