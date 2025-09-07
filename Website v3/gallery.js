// Simple Gallery JavaScript - Save as gallery.js

let currentSlide = 0;
const totalSlides = 9; // Update this if you add/remove items

// Change slide with arrows
function changeSlide(direction) {
    // Hide current slide
    const currentItem = document.querySelectorAll('.gallery-item')[currentSlide];
    const currentThumb = document.querySelectorAll('.gallery-thumb')[currentSlide];
    const currentCaption = document.querySelectorAll('.gallery-caption')[currentSlide];
    currentItem.classList.remove('active');
    currentThumb.classList.remove('active');
    currentCaption.classList.remove('active');
    
    // Pause and reset video if it's a video
    if (currentItem.tagName === 'VIDEO') {
        currentItem.pause();
        currentItem.currentTime = 0;
    }
    
    // Update slide number
    currentSlide += direction;
    
    // Loop around if needed
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    // Show new slide
    const newItem = document.querySelectorAll('.gallery-item')[currentSlide];
    const newThumb = document.querySelectorAll('.gallery-thumb')[currentSlide];
    const newCaption = document.querySelectorAll('.gallery-caption')[currentSlide];
    newItem.classList.add('active');
    newThumb.classList.add('active');
    newCaption.classList.add('active');
    
    // Update counter
    document.getElementById('current-slide').textContent = currentSlide + 1;
}

// Go to specific slide (for thumbnail clicks)
function goToSlide(slideNumber) {
    // Hide current slide
    const currentItem = document.querySelectorAll('.gallery-item')[currentSlide];
    const currentThumb = document.querySelectorAll('.gallery-thumb')[currentSlide];
    const currentCaption = document.querySelectorAll('.gallery-caption')[currentSlide];
    currentItem.classList.remove('active');
    currentThumb.classList.remove('active');
    currentCaption.classList.remove('active');
    
    // Pause and reset video if it's a video
    if (currentItem.tagName === 'VIDEO') {
        currentItem.pause();
        currentItem.currentTime = 0;
    }
    
    // Set new slide
    currentSlide = slideNumber;
    
    // Show new slide
    const newItem = document.querySelectorAll('.gallery-item')[currentSlide];
    const newThumb = document.querySelectorAll('.gallery-thumb')[currentSlide];
    const newCaption = document.querySelectorAll('.gallery-caption')[currentSlide];
    newItem.classList.add('active');
    newThumb.classList.add('active');
    newCaption.classList.add('active');
    
    // Update counter
    document.getElementById('current-slide').textContent = currentSlide + 1;
}