import { Request, Response } from 'express'

class CourseController {
  public index(req: Request, res: Response) {
    res.json({})
  }
}

export const courseController = new CourseController()
