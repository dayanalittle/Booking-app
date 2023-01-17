import { Router } from 'express'
import * as appointmentsCtrl from '../controllers/appointments.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', appointmentsCtrl.index)
router.post('/', isLoggedIn, appointmentsCtrl.create)
router.get('/:id', appointmentsCtrl.show)
export {
  router
}