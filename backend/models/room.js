import { model, Schema } from "mongoose";

const roomschema =new Schema({
    name :{
        type: String,
        require: true
    },
    maxCount :{
        type: Number,
        require: true
    },
    phoneNumber :{
        type: String,
        require: true
    },
    rentPrice   :{
        type: Number,
        require: true
    },
    img : [],
    cur_Booking: [],
    type :{
        type :String,
        require: true
    },
    description :{
        type : String,
        require: true
    },
    availability:{
        type:Boolean,
        default:true
    },
    dateOfBooked:[]
}, {
    timestamps: true
})

const room= model('room',roomschema);

export default room;