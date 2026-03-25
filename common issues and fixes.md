JavaScript DOM Selection Errors
Issue: Clicking the "Add Transaction" button resulted in a "Cannot read property of null" error in the browser console.

Cause: The project2.js file was trying to select HTML elements (like the input fields) using IDs that did not match the ones defined in login.html or the main dashboard file.

Resolution: Verified all id attributes in the HTML and updated the document.getElementById() calls in the JavaScript to ensure they were perfectly synced.

Dynamic List Rendering Bugs
Issue: When a new transaction was added, it would either replace the previous one or not appear in the transaction history list at all.

Cause: The JavaScript function was overwriting the innerHTML of the list container instead of appending a new list item (<li>) element.

Resolution: Updated the logic to use document.createElement('li') and appendChild(), ensuring every new entry is added to the history without deleting existing data.
