import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


router.get('/new', reviewsCtrl.new)
router.post('/new-review', isLoggedIn, reviewsCtrl.create)


export {
	router
}