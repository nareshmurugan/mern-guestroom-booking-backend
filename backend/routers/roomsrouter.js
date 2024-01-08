import { Router } from 'express'
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();
// import {GetRoomController, CreateRoomController, UpdateRoomController, DeleteRoomController, BookRoomController, CancelRoomController } from '../controllers/roomController.js';
import {GetRoomController,GetRoom, GetBookings, RoomBooking} from '../controllers/roomController.js';

//GetRooms
router.get('/getallrooms', GetRoomController);
//GetRoom
router.post('/getRoom', GetRoom);
//GetBookings
router.post('/getbookings',verifyToken, GetBookings)
// RoomBooking
router.post('/getbookings',verifyToken, RoomBookings)
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