
// import fetch from 'node-fetch'
import type { RequestHandler }  from '@sveltejs/kit'

const tokenURL = 'https://github.com/login/oauth/access_token'
const userURL = 'https://api.github.com/user'

const clientId : string  = import.meta.env.VITE_CLIENT_ID
const secret : string =  import.meta.env.VITE_CLIENT_SECRET


async function getUser(accessToken : string )  {
    const response: Response = await fetch(userURL, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  })
  return getResponseContent(response, 'getUser')
  
  
}

async function getResponseContent(r:Response, from? : string) {
  const j =  await r.json()
  
  return j

}


export const GET : RequestHandler = async (event) => {
  const code = event.url.searchParams.get('code')
  const accessToken = await getAccessToken(<string>code)
  const user = await getUser(accessToken)

    // this mutates the locals object on the request
  // and will be read by the hooks/handle function
  // after the resolve
  event.locals.user = user.login
    

  return {

    status: 302,
    headers: {
      location: '/'
    }
  }
}

async function getAccessToken(code: string) {
  const response = await  fetch(tokenURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: secret,
      code
    })
  })
  const json = await getResponseContent(response, 'getAccessToken')
  return json.access_token // get away with .access_token on any. Nice but WTF

}
