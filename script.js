document.addEventListener('DOMContentLoaded', function() {
    const showUserStoryButton = document.getElementById('showUserStory');
    const additionalUserStory = document.getElementById('additionalUserStory');

    showUserStoryButton.addEventListener('click', function() {
        additionalUserStory.style.display = 'block';
    });
});