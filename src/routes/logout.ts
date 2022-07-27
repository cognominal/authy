import type { RequestHandler }  from '@sveltejs/kit'


export const GET : RequestHandler = async (event) => {

event.locals.user = null
return {
  status: 302,
  headers: {
    location: '/'
  }
}
}
