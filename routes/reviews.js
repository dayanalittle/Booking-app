import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


router.get('/', reviewsCtrl.new)
// router.post('/', isLoggedIn, reviewsCtrl.create)


export {
	router
}