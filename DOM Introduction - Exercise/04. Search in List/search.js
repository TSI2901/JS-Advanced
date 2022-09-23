function search() {
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let input = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let count = 0;

    for (const town of towns) {
        if (town.textContent.includes(input)){
            count++;
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
        }
    }
    result.textContent = `${count} matches found`;
}
