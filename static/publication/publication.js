document.addEventListener("DOMContentLoaded", function() {
    // Setup event listeners for each cite button
    document.querySelectorAll('.citeBtn').forEach(function(button, index) {
        button.addEventListener('click', function() {
            // Find the modal related to this specific cite button
            var modal = button.nextElementSibling; // assuming modal div is right after the button
            modal.style.display = 'block'; // Show the modal
        });
    });

    // Setup event listeners for each close button
    document.querySelectorAll('.modal .close').forEach(function(closeBtn) {
        closeBtn.addEventListener('click', function() {
            var modal = closeBtn.closest('.modal');
            modal.style.display = 'none'; // Hide the modal
        });
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(event) {
        document.querySelectorAll('.modal').forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    });

    // Setup copy functionality for each copy button
    document.querySelectorAll('.modal-content button').forEach(function(copyBtn) {
        copyBtn.addEventListener('click', function() {
            // Extract text from the <pre> element in the same modal content
            var text = copyBtn.parentElement.querySelector('.citationText').innerText;
            navigator.clipboard.writeText(text).then(function() {
                alert('Citation copied to clipboard!');
            }, function(err) {
                alert('Failed to copy text: ' + err);
            });
        });
    });
});
