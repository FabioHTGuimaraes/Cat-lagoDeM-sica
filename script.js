function filterTable() {
    const searchInput = document.getElementById('search');
    const filter = searchInput.value.toLowerCase();
    const tableRows = document.querySelectorAll('.musicList tbody tr');

    tableRows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        if (rowText.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}