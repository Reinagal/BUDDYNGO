const initSortable1 = () => {
  const sortable = Sortable.create(simpleList1, {
                 animation: 300,
                 ghostClass: 'main-green-background',
                 chosenClass: 'light-green-background',
                 dragClass: 'light-green-background',
                 dataIdAttr: 'data-id' });
  const button = document.querySelector("#dirty-button1");

  button.addEventListener("click", (event) => {
        const input = document.getElementById('answer_theme_ranking');
        input.value = sortable.toArray();
        });
}

const initSortable2 = () => {
  const sortable = Sortable.create(simpleList2, {
                 animation: 300,
                 ghostClass: 'main-green-background',
                 chosenClass: 'light-green-background',
                 dragClass: 'light-green-background',
                 dataIdAttr: 'data-id' });
  const button = document.querySelector("#dirty-button2");

  button.addEventListener("click", (event) => {
        const input = document.getElementById('answer_destination_ranking');
        input.value = sortable.toArray();
        });
}

export { initSortable1 };
export { initSortable2 };
