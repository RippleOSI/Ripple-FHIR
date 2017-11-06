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

   
