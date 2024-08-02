function getSuggestions(sugg) {
    const suggestions = ["Sales", "Dick", "jacky", "cumlon", "ashhy", "Jonson"];
    
    const suggestionsList = document.getElementById("suggestionsList");
    suggestionsList.innerHTML = '';

    if (sugg.length === 0) {
        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            li.onclick = () => {
              document.getElementById('searchInput').value = suggestion;
              suggestionsList.style.display = 'none';
            };
            suggestionsList.appendChild(li);
        });
        suggestionsList.style.display = 'block';
        return;
    }

    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().startsWith(sugg.toLowerCase())
    );

    filteredSuggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        li.onclick = () => {
            document.getElementById('searchInput').value = suggestion;
        };
        suggestionsList.appendChild(li);
    });

    suggestionsList.style.display = 'block';
}

function stopShow() {
    const suggestionsList = document.getElementById("suggestionsList");
    suggestionsList.innerHTML = '';
}

function search() {
    window.open("SalesFlow\\" + document.getElementById('searchInput').value + ".html");
}