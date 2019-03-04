const initSortable = () => {
  const sortable = Sortable.create(simpleList, {
                 animation: 300,
                 ghostClass: 'main-green-background',
                 chosenClass: 'light-green-background',
                 dragClass: 'light-green-background',
                 dataIdAttr: 'data-id' });

  const button = document.querySelector("#dirty-button");

  button.addEventListener("click", (event) => {
        const input = document.getElementById('answer_theme_ranking');
        input.value = sortable.toArray();
        });
}

export { initSortable };
