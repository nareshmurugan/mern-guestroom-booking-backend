import { Router } from 'express'

const router = Router();
// import {GetRoomController, CreateRoomController, UpdateRoomController, DeleteRoomController, BookRoomController, CancelRoomController } from '../controllers/roomController.js';
// import { verifyToken } from '../middlewares/authMiddleware.js';
import {GetRoomController} from '../controllers/roomController.js';

//GetRoom
router.get('/getallrooms', GetRoomController);
// CreateRoom
// router.post('/create', verifyToken, CreateRoomController);
// // UpdateRoom
// router.put('/update/:id', verifyToken, UpdateRoomController);
// // DeleteRoom
// router.delete('/delete/:id', verifyToken, DeleteRoomController);
// // BookRoom
// router.put('/bookroom', verifyToken, BookRoomController);
// // CancelRoom
// router.put('/cancelroom', verifyToken, CancelRoomController);

export default router;