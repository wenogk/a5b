# Dynamic QR Codes
Simple application to use QR codes dynamically using express &amp; nodejs. This is a project for my Residential Education floor as I am a Resident Assistant.

Basically you setup some QR codes that point to static urls. However, these static URLs lead to this application that basically acts as the middleman before redirecting to the specific URL. Therefore you can update the URL of the QR code at any time with the same static QR code.

I've built two modes, "single" and "multiple" which basically allows me to select the single mode and route all the QR codes of my residents to one URL while the multiple allows me to edit/update each individual URL.

I've modularized the code, data.js has the object with the data alone including the option of "single" or "multiple", therefore a simple edit of this data and a push changes the route redirection from the QR code.
