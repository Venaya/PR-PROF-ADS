const mongoose = require('mongoose');

const ScheduleModelSchema = new mongoose.Schema({

});

const Schedule = mongoose.model('Shedule', ScheduleModelSchema);

module.exports = Schedule;