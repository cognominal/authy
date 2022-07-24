import type { RequestHandler } from "@sveltejs/kit"

const ghAuthURL = 'https://github.com/login/oauth/authorize'
const clientId = import.meta.env.VITE_CLIENT_ID

export const GET: RequestHandler = (event) => {
  const sessionId = '1234'
  const location = `${ghAuthURL}?client_id=${clientId}&state=${sessionId}`
  console.log(`redirect location: ${location}` );
  
  return {
    status: 302,
    headers: {
      location
    }
  }
}

