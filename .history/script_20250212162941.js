function loadReviews() {
    console.log("loadReviews called!");
    fetch('reviews.json')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();  // Assuming the server sends JSON 
        })
        .then(todos => {
            console.log(todos); // An array of to-do objects
        })
        .catch(error => {
            console.error('There was a problem:', error);
        });
}

function handleReviewSubmit() {
    console.log("handleReviewSubmit");
}

function createReviewElement(review) {
    console.log(review);
    const newDiv = document.createElement('div'); // Create the main review container
    newDiv.classList.add('review-item'); // Add the class 'review-item' (can style now)
    const bookTitle = document.createElement('h3'); // Create and add book title
    bookTitle.textContent = review.title;
    newDiv.append(bookTitle);
    const reviewText = document.createElement('p'); // Create and add review text
    reviewText.textContent = review.reviewText;
    newDiv.append(reviewText);
    const rating = document.createElement('p'); // Create and add rating
    rating.textContent = `Rating: ${review.rating}`;
    newDiv.append(rating);
    const likeButton = document.createElement('button'); // 
    likeButton.textContent = "Like";
    likeButton.id = `like-${review.id}`; // Unique ID based on review ID
    likeButton.setAttribute('data-liked', 'false');
    likeButton.addEventListener('click', () => toggleLike(likeButton, review.id));
    newDiv.appendChild(likeButton);
}

function toggleLike() {
    console.log('Like button clicked');
}

function repostReview() {
    console.log('Repost button clicked');
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("page loaded and ready for actions!");
    loadReviews();
    const reviewForm = document.getElementById("reviews-list");
    form.addEventListener('submit', handleReviewSubmit);  
});