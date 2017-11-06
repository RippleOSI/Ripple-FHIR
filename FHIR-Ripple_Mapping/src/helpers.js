{
  generateText: function(patientName, cause, reaction, dateCreated) {
    var year = new Date(dateCreated).getFullYear();
    return "<div><p><b>Allergy Intolerance</b></p><p><b>Patient</b>: " + patientName + "</p><p><b>Allergy</b>: " + cause + "</p><p><b>Status</b>: Active</p><p><b>Reactions</b>: " + reaction + "</p><p><b>Onset</b>: " + year + "</p></div>"
  },
  getPatientId(input) {
    return input.split('Patient/')[1];
  }
}