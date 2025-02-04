// document.addEventListener('DOMContentLoaded', function() {
//     const searchInput = document.getElementById('searchInput');
//     const publications = document.querySelectorAll('.works');

//     searchInput.addEventListener('input', function() {
//         const searchTerm = this.value.toLowerCase();
//         let hasResults = false;

//         publications.forEach(pub => {
//             const text = pub.textContent.toLowerCase();
//             if (text.includes(searchTerm)) {
//                 pub.style.display = '';
//                 hasResults = true;
//             } else {
//                 pub.style.display = 'none';
//             }
//         });

//         // Optional: Display a message if no results are found
//         const noResultsMsg = document.getElementById('noResultsMessage');
//         if (!hasResults) {
//             noResultsMsg.style.display = 'block';
//         } else {
//             noResultsMsg.style.display = 'none';
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('publication-search');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const sections = document.querySelectorAll('.section');

        sections.forEach(section => {
            let hasVisiblePublications = false;
            const publications = section.querySelectorAll('.works');

            publications.forEach(pub => {
                const text = pub.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    pub.style.display = ''; // Show the publication
                    hasVisiblePublications = true;
                } else {
                    pub.style.display = 'none'; // Hide the publication
                }
            });

            // Hide or show the entire section based on if there are visible publications
            section.style.display = hasVisiblePublications ? '' : 'none';
        });

        // Optionally, handle if no sections are visible
        handleNoResults(sections);
    });
});

function handleNoResults(sections) {
    const noResults = document.getElementById('noResultsMessage');
    const anySectionVisible = Array.from(sections).some(section => section.style.display !== 'none');

    noResults.style.display = anySectionVisible ? 'none' : 'block';
}

document.getElementById("publication-type").addEventListener("change", function() {
    let selectedValue = this.value;
    let sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        if (selectedValue === "all") {
            section.style.display = "block"; // Show all
        } else {
            section.style.display = section.id === selectedValue ? "block" : "none";
        }
    });
});

