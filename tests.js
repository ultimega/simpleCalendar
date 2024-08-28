// calendar-app-tests.js

describe('Calendar App', () => {
    beforeEach(() => {
      // Clear localStorage and set up the DOM
      localStorage.clear();
      document.body.innerHTML = ''; // Assuming you have a way to load the HTML
      // Initialize the app
    });
  
    test('Prefill date and time fields', () => {
      const dateField = document.getElementById('eventDate');
      const timeField = document.getElementById('eventTime');
      const now = new Date();
      
      expect(dateField.value).toBe(now.toISOString().split('T')[0]);
      expect(timeField.value).toBe(now.toTimeString().split(' ')[0].slice(0, 5));
    });
  
    test('Add/Update button functionality', () => {
      const form = document.getElementById('eventForm');
      const eventNameField = document.getElementById('eventName');
      const dateField = document.getElementById('eventDate');
      const timeField = document.getElementById('eventTime');
  
      eventNameField.value = 'Test Event';
      dateField.value = '2023-08-28';
      timeField.value = '14:30';
  
      form.dispatchEvent(new Event('submit'));
  
      const events = JSON.parse(localStorage.getItem('events'));
      expect(events).toHaveLength(1);
      expect(events[0]).toEqual({
        name: 'Test Event',
        date: '2023-08-28',
        time: '14:30'
      });
    });
  
    test('Select All button functionality', () => {
      // Add some test events
      localStorage.setItem('events', JSON.stringify([
        { name: 'Event 1', date: '2023-08-28', time: '10:00' },
        { name: 'Event 2', date: '2023-08-29', time: '11:00' }
      ]));
  
      // Reload events
      loadEvents();
  
      const selectAllButton = document.getElementById('selectAll');
      selectAllButton.click();
  
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        expect(checkbox.checked).toBe(true);
      });
  
      // Click again to deselect all
      selectAllButton.click();
      checkboxes.forEach(checkbox => {
        expect(checkbox.checked).toBe(false);
      });
    });
  
    test('Multi-select functionality', () => {
      // Add some test events
      localStorage.setItem('events', JSON.stringify([
        { name: 'Event 1', date: '2023-08-28', time: '10:00' },
        { name: 'Event 2', date: '2023-08-29', time: '11:00' },
        { name: 'Event 3', date: '2023-08-30', time: '12:00' }
      ]));
  
      // Reload events
      loadEvents();
  
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes[0].click();
      checkboxes[2].click();
  
      expect(checkboxes[0].checked).toBe(true);
      expect(checkboxes[1].checked).toBe(false);
      expect(checkboxes[2].checked).toBe(true);
    });
  
    test('Last selected event highlight', () => {
      // Add some test events
      localStorage.setItem('events', JSON.stringify([
        { name: 'Event 1', date: '2023-08-28', time: '10:00' },
        { name: 'Event 2', date: '2023-08-29', time: '11:00' }
      ]));
  
      // Reload events
      loadEvents();
  
      const rows = document.querySelectorAll('tbody tr');
    rows[1].querySelector('input[type="checkbox"]').click();

    expect(rows[0].classList.contains('last-selected')).toBe(false);
    expect(rows[1].classList.contains('last-selected')).toBe(true);
  });

  test('Delete selected events', () => {
    // Add some test events
    localStorage.setItem('events', JSON.stringify([
      { name: 'Event 1', date: '2023-08-28', time: '10:00' },
      { name: 'Event 2', date: '2023-08-29', time: '11:00' },
      { name: 'Event 3', date: '2023-08-30', time: '12:00' }
    ]));

    // Reload events
    loadEvents();

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes[0].click();
    checkboxes[2].click();

    const deleteButton = document.getElementById('deleteSelected');
    deleteButton.click();

    const events = JSON.parse(localStorage.getItem('events'));
    expect(events).toHaveLength(1);
    expect(events[0].name).toBe('Event 2');
  });

  test('Form prefill with last selected event', () => {
    // Add some test events
    localStorage.setItem('events', JSON.stringify([
      { name: 'Event 1', date: '2023-08-28', time: '10:00' },
      { name: 'Event 2', date: '2023-08-29', time: '11:00' }
    ]));

    // Reload events
    loadEvents();

    const rows = document.querySelectorAll('tbody tr');
    rows[1].querySelector('input[type="checkbox"]').click();

    const eventNameField = document.getElementById('eventName');
    const dateField = document.getElementById('eventDate');
    const timeField = document.getElementById('eventTime');

    expect(eventNameField.value).toBe('Event 2');
    expect(dateField.value).toBe('2023-08-29');
    expect(timeField.value).toBe('11:00');
  });

  test('Select column is on the left side', () => {
    // Add a test event
    localStorage.setItem('events', JSON.stringify([
      { name: 'Event 1', date: '2023-08-28', time: '10:00' }
    ]));

    // Reload events
    loadEvents();

    const firstRow = document.querySelector('tbody tr');
    const firstCell = firstRow.cells[0];
    
    expect(firstCell.querySelector('input[type="checkbox"]')).not.toBeNull();
  });
});