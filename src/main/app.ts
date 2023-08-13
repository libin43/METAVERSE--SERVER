import express, { type Request, type Response, type NextFunction } from 'express'
// import config from '../config/config.ts'

const app = express()

app.get('/home', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello Libin Home')
})

app.listen(3000, () => { console.log('Server Listening on port 3000') })
