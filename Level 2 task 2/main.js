const searchForm = document.getElementById('search-form');
const resultsSection = document.getElementById('results-section');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const checkInDate = document.getElementById('check-in-date').value;
    const checkOutDate = document.getElementById('check-out-date').value;

    // You can use the location, checkInDate, and checkOutDate to perform a search using APIs.
    // Fetch results from the server and dynamically populate the #results-section with the search results.
    // For brevity, we won't implement the API call and result population here.
});