import { Router } from 'express'
import userController from '../controller/userController'

class UserRoutes {
  public router: Router = Router()
  constructor() {
    this.config()
  }

  config(): void {
    this.router.get('/', userController.list)
  }
}

const userRoutes = new UserRoutes()
export default userRoutes.router
