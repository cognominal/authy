The get is initiated by github in response to the login
it passes the code search
called by src/routes/login.ts https://github.com/login/oauth/authorize?client_id=4f398de41d610156dc90&state=1234
callback handled by      src/routes/callback.ts        

- Success http://localhost:5173/callback?code=aed77bb3f8d85be53c36&state=1234
- Error  http://localhost:5173/callback?error=access_denied&error_description=The+user+has+denied+your+application+access.&error_uri=https%3A%2F%2Fdocs.github.com%2Fapps%2Fmanaging-oauth-apps%2Ftroubleshooting-authorization-request-errors%2F%23access-denied&state=1234