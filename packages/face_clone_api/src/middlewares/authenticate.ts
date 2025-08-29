import { auth } from 'express-oauth2-jwt-bearer'

const authenticateUser = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
})

export default authenticateUser
