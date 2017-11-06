# Mapping between Ripple and FHIR

## Running the Demo

Start the JSON Transformer Tool

[http://dev.ripple.foundation/json-editor/index.html](http://dev.ripple.foundation/json-editor/index.html)

You may need to widen the browser panel to make the editor panels format correctly.

Follow the instructions below for the 2 mapping demos which show an Allergy record being
mapped between Ripple UI format and FHIR format


## Mapping from Ripple UI Object to FHIR

1) Copy the file */src/allergiesRippleExample.json* and paste it into the left-hand panel

This is an example of the JSON that would be sent from the Ripple/PulseTile UI, containing an
allergy record

2) Copy the transform template file */src/allergiesToFHIR.json* and paste it into the middle pane

This defines the transformations to convert the Ripple UI JSON into corresponding FHIR JSON format

3) Click the *Function* button at the top of the middle panel.  A dialogue will appear.

4) In the dialogue pop-up window, click the *Add Helper Function Object* button

5) Copy the file */src/helpers.js* and paste it into the Helper Function Object window

6) Click the *Save* button

7) Click the *Test Your Template* button at the top of the middle pane.

In the right-hand panel you should see a FHIR Allergy Resource that has been generated from the
Ripple JSON object in the left-hand panel!

8) When you're happy with the transformation, copy the template object from the middle pane (make sure
that the JSON editor is in Text view mode).  Save this file using the name of your choice (eg
*Allergies_Ripple_to_FHIR.json*)


![UI2FHIR](https://github.com/RippleOSI/Ripple-FHIR/blob/master/FHIR-Ripple_Mapping/img/UI2FHIRtransform.PNG "UI 2 FHIR View")
![UI2FHIR Tree View](https://github.com/RippleOSI/Ripple-FHIR/blob/master/FHIR-Ripple_Mapping/img/UI2FHIRtransform_treeView.PNG "UI 2 FHIR Tree View")

## Mapping from FHIR to Ripple UI Object

Now we'll do the reverse.

1) Copy the file */src/allergiesFHIRExample.json* and paste it into the left-hand panel, completely
replacing any previous content you had in that panel

2) Copy the file */src/allergiesToRipple.json* template file and paste it into the middle panel,
completely replacing any previous content you had in that panel

3) If you've already added the Helpers Function Object (see steps 3 - 6 above), proceed to step 4.  Otherwise
add the Helpers Function Object by following steps 3 - 6 above.

4) Click the *Test Your Template* button at the top of the middle pane.

In the right-hand panel you should see a Ripple/PulseTile UI JSON object that has been generated from the
FHIR object in the left-hand panel!

5) When you're happy with the transformation, copy the template object from the middle pane (make sure
that the JSON editor is in Text view mode).  Save this file using the name of your choice (eg
*Allergies_FHIR_to_Ripple.json*)

![FHIR 2 UI View](https://github.com/RippleOSI/Ripple-FHIR/blob/master/FHIR-Ripple_Mapping/img/FHIR2UItransform.PNG "FHIR 2 UI View")
![FHIR 2 UI Tree View](https://github.com/RippleOSI/Ripple-FHIR/blob/master/FHIR-Ripple_Mapping/img/FHIR2UItransform_treeview.PNG "FHIR 2 UI Tree View")
   
## Using the Transformation Mapping Templates

To make use of the templates in Ripple, create one/two files for the FHIR resource, e.g. one for both GET and POST, or one for GET and one for POST.

The GET-Transform file will use the FHIR to Ripple UI template that you created (eg *Allergies_FHIR_to_Ripple.json*)

The POST-Transform file will use the Ripple UI to FHIR template that you created (eg *Allergies_Ripple_to_FHIR.json*)

When the Ripple Middle Tier fetches an instance of, eg a FHIR Allergy record from the FHIR server, 
it will apply the *Allergies_FHIR_to_Ripple.json* template, and return the transformed object to 
the Ripple UI - PulseTile will then display the Allergy record

When a new Allergy record is POSTed from the Ripple UI, the middle tier will apply the
*Allergies_Ripple_to_FHIR.json* template, and POST the Allergy FHIR JSON record to the remote server.



