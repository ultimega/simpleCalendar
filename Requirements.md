# Done
- UI(significant): Updated Control Panel Section Layout  :Done
    - 3 sections for the control panel : Input, Read and Batch.
    - For the Input Section, From the Add Event text to the Time Section with the Add Event button and Delete button.
    - Next, the Read Section, with just the search and filter functionality and reset buttons. as well as the calendar  view button.
    - Third Section, the Batch Section including all other buttons 
    - Change "Range View" To "Calendar View"
    - Delete Seleted changed to "Delete"
  - 

- Event Name placeholder to be overwritten : "Event Name". no label : Done
- In the list view, shift time column to 2nd column. : Done (affects Calendar view by current code logic)
- Delete grayed out till selection done
- For the Event Container, smaller well spaced buttons : Done
- Search and Filter "All Fields" should be less techy themed . Changed to "All" : Done
  
CRITICAL BUG CAUGHT AND Fixed - took majority of dev time:
- At some point i realised the selected event did not match the event in the table. spending some hours, i found bugs.
	- After investigating, the bugs were present since the pagination option and range view commit
	- the solution was to update indexes and implement a refresh mechanism in the current head...making the application more functional


## TO DO

- 
- CurrentRange and previous range buttons should be selectable data fields 
- In the Calendar View, the Year and Month should be displayed on top of the calendar
- Enable Pagination for the month's weeks. this should be successive into another month effecting a change of the year and month displayed at the top of the calendar

- Re-Work On search and filter...should be automatic and across all fields not needing the user to type in the field.
- chosen Dates in Search and Filter should be linked to the events shown in the calendar
- By default, the calendar view should have the year displayed on top while taken out of the event name in the shown events

- Select ALl and select between should work as one Big checkbox at the select column header

- Good interaction Feedback checks and implementation
- One Navigation Style, Scrolling(ListView) and Pagination(Calendar View)
- add show : current events only, past events only, future events only

## DOING
DONE- Indpendent Calendar view (on new branch) with same function defnitions and capabilites.

DONE - In the Calendar View, Events should be shown only annually per the respective month, on top. Dropdowns can be used. so like a dropdown to select the year and another to select the month. then the pagination shifts the weeks.

- Providing interactive Styling for the calendar view
  - 
  - Calendar grid to be made vertical before 
  - 
  we proceed
  
- In the Calendar View, a date's events&time should be compiled into that record, oneline
  


## BUGS
- after filtering, wrong event is updated after selection done
- After using calendar view you are limited to only that range of results even in the list view 
  - QUICK-FIX: Refresh the page to obtain the default list view
- Attempted record highlighting for visual feedback not on point . needs update