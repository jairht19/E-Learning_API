import { Request, Response } from 'express'

class userController {
  public async list(req:Request, res:Response) {
    res.json([])
  }
}

const usersController = new userController()
export default usersController
