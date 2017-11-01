/**
 * Created by kate on 10/23/17.
 */




export function addEvent(mongoose,Event,userId, eventName, date, description){

    var newEvent = new Event({added_by_user_id:mongoose.Types.ObjectId(userId), event_name:eventName,
        a_date:new Date(date.day, date.month, date.year, date.hours, date.minutes, "",""), description})
    newEvent.save(function (err) {
        if (err) return console.error(err);
    });

}

