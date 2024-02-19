import { Router } from 'express'
import { courseController } from '../controller/coursesController'

class CourseRoutes {
  public router: Router = Router()
  constructor() {
    this.config()
  }
  config(): void {
    this.router.get('/', courseController.index)
  }
}
const courseRoutes = new CourseRoutes()
export default courseRoutes.router
