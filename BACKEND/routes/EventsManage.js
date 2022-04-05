const router = require("express").Router();
const EventsManage = require("../models/EventsManage");
const { findById } = require("../models/EventsManage");

//router.get("/test",async (req, res) => {
//    console.log("adasd", await res.json())
//})

router.route('/').get((req, res) => {
  EventsManage.find()
    .then(EventsManage => res.json(EventsManage))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const EventId = req.body.EventId;
  const EventType = req.body.EventType;
  const EventPlace = req.body.EventPlace;
  const NumberOfguests= Number(req.body.NumberOfguests);
  const date = Date.parse(req.body.date);
  const EventFee = Number(req.body.EventFee);
  
  const newEvents = new EventsManage({
      EventId,
      EventType,
      EventPlace,
      NumberOfguests,
      date,
      EventFee
    });

    newEvents.save()
  .then(() => res.json('Event added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/get/:id').get((req, res) => {
  EventsManage.findById(req.params.id)
    .then(EventsManage => res.json(EventsManage))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  EventsManage.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  EventsManage.findById(req.params.id)
    .then(EventsManage => {
      EventsManage.EventType = req.body.EventType;
      EventsManage.EventPlace= req.body.EventPlace;
      EventsManage.NumberOfguests = req.body.NumberOfguests;
      EventsManage.date = Date.parse(req.body.date);
      EventsManage.EventFee = req.body.EventFee;
    


     EventsManage.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
