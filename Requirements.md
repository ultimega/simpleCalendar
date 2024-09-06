# Delivering Friday 2pm 5th September 2024
- UI(significant): Updated Control Panel Section Layout  :Done
    - 3 sections for the control panel : Input, Read and Batch.
    - For the Input Section, From the Add Event text to the Time Section with the Add Event button and Delete button.
    - Next, the Read Section, with just the search and filter functionality and reset buttons. as well as the calendar  view button.
    - Third Section, the Batch Section including all other buttons 
    - Change "Range View" To "Calendar View"
    - Delete Seleted changed to "Delete"
  - 

- Event Name placeholder to be overwritten : "Event Name". no label
- In the list view, shift time column to 2nd column
- Delete grayed out till selection done
- For the Event Container,smaller buttons
- Search and Filter "All Fields" should be less techy themed
  
- In the Calendar View, a date's events&time should be compiled into that record, onelinee
- 
- CurrentRange and previous range buttons should be selectable data fields 
- In the Calendar View, the Year and Month should be displayed on top of the calendar
- Enable Pagination for the month's weeks. this should be successive into another month effecting a change of the year and month displayed at the top of the calendar

- Re-Work On search and filter...should be automatic and across all fields not needing the user to type in the field.
- chosen Dates in Search and Filter should be linked to the events shown in the calendar
- By default, the calendar view should have the year displayed on top while taken out of the event name in the shown events

- Select ALl and select between should work as one Big checkbox at the select column header

 - 
- One Navigation Style, Scrolling(ListView) and Pagination(Calendar View)
- add show : current events only, past events only, future events only

## BUGS
- after filtering, wrong event is updated after selection done
- After using calendar view you are limited to only that range of results even in the list view 
  - QUICK-FIX: Refresh the page to obtain the default list view