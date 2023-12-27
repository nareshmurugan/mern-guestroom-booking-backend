import { Schema, model } from 'mongoose';

const customerSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum : ['CUSTOMER','ADMIN','USER'],
        default: 'CUSTOMER'
    },
    roomsHistory: [
       {
            rooomId:{
                type:String
            },
            roomStatus:{
                type: String,
                enum : ['BOOKED','PENDING','CANCELED']
            },
            roomBookedDate:{
                type:Date,
                default: Date.now
            }
       }
    ],
    propertyHistory:{
            totalRooms:[],
            availableRooms:[],
            bookedRooms:[]
        }
}, {
    timestamps: true
});

const User = model('Users', customerSchema);

export default User;
