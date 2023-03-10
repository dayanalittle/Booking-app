import { Router } from 'express'
import * as appointmentsCtrl from '../controllers/appointments.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', appointmentsCtrl.index)
router.get('/:id', appointmentsCtrl.show)
router.get('/new', appointmentsCtrl.new)
router.post('/', isLoggedIn, appointmentsCtrl.create)

router.get('/:id/edit', isLoggedIn, appointmentsCtrl.edit)
router.put('/:id', isLoggedIn, appointmentsCtrl.update)
router.delete('/:id', isLoggedIn, appointmentsCtrl.delete)



export {
  router
}