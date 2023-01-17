import { Router } from 'express'
import * as appointmentsCtrl from '../controllers/appointments.js'
const router = Router()

router.get('/', appointmentsCtrl.index)

export {
  router
}