const { text } = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventsSchema = new Schema({

    EventId:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    EventType :{
        type : String,
        required: true,
        trim:true
    },
    EventPlace :{
        type : String,
        required: true,
        trim:true
    },
    NumberOfguests :{
        type: Number,
        maxlength:5,
        required: true
    },
    date :{
        type : Date,
        required: true
    },
    EventFee :{
        type : Number
    }
},
 );
    
    const EventsManage = mongoose.model("Events",eventsSchema);
    
    module.exports = EventsManage;
