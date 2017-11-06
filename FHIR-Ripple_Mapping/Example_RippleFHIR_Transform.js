GET /// use FHIR to UI template// to do

{
  "patientId": "=> getPatientId(entry[0].resource.patient.reference)",
  "patientName": "{{entry[0].resource.patient.display}}",
  "cause": "{{entry[0].resource.substance.text}}",
  "causeCode": "SNOMED-CT",
  "causeTerminology": "{{entry[0].resource.substance.coding[0].code}}",
  "terminologyCode": "SNOMED-CT",
  "reaction": "{{entry[0].resource.reaction[0].manifestation[0].text}}",
  "author": "{{entry[0].resource.recorder.display}}",
  "dateCreated": "=> getTime(entry[0].resource.recordedDate)",
  "source": "ethercis",
  "sourceId": "{{entry[0].resource.id}}",
  "originalComposition": "",
  "originalSource": ""
}



POST // use UI to FHIR template // to do

{
  "resourceType": "Bundle",
  "total": 1,
  "entry": [
    {
      "resource": {
        "resourceType": "AllergyIntolerance",
        "text": {
          "status": "=> generateText(patientName, cause, reaction, dateCreated)"
        },
        "id": "{{sourceId}}",
        "patient": {
          "reference": "Patient/{{patientId}}",
          "display": "{{patientName}}"
        },
        "clinicalStatus": "active",
        "verificationStatus": "confirmed",
        "substance": {
          "text": "{{cause}}",
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "{{causeTerminology}}"
            }
          ]
        },
        "recordedDate": "=> getDate(dateCreated)",
        "recorder": {
          "display": "{{author}}"
        },
        "reaction": [
          {
            "manifestation": [
              {
                "text": "{{reaction}}",
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "1806006"
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
}
