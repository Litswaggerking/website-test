function togglePost(postId) {
    const content = document.getElementById(postId);
    const header = content.previousElementSibling;
    
    if (content.classList.contains('expanded')) {
        // Close the post
        content.classList.remove('expanded');
        header.classList.remove('expanded');
    } else {
        // Open the post
        content.classList.add('expanded');
        header.classList.add('expanded');
    }
}

// Optional: Auto-generate preview content from post content
function generatePreviews() {
    const posts = document.querySelectorAll('.blog-post');
    
    posts.forEach(post => {
        const previewArea = post.querySelector('.post-preview-area');
        const fullContent = post.querySelector('.post-content');
        
        if (previewArea && fullContent && previewArea.innerHTML.trim() === '') {
            // Clone the first few elements from full content
            const contentClone = fullContent.cloneNode(true);
            const children = contentClone.children;
            
            // Keep only first 2-3 elements for preview
            for (let i = children.length - 1; i >= 3; i--) {
                children[i].remove();
            }
            
            previewArea.innerHTML = contentClone.innerHTML;
        }
    });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', generatePreviews);