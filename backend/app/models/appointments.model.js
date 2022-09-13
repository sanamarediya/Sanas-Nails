const sql = require("./db.js");

//Constuctor for appointments
const Appointments = function(appointments){
  this.firstName = appointments.firstName;
  this.lastName = appointments.lastName;
  this.email = appointments.email;
  this.phoneNumber = appointments.phoneNumber;
  this.service = appointments.service;
  this.dateTime = appointments.dateTime;
}

//Create an appointment
Appointments.create = (newAppointment, result) => {
  sql.query("INSERT INTO appointments SET ?", newAppointment, (err, res) => {
    if(err) {
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    console.log("Appointment created: ", { id: res.insertId, ...newAppointment });
    result(null, { id: res.insertId, ...newAppointment });
  })
}

