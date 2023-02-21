const apiKey = '71048582';
const submitBtn = document.getElementById("js-submit");
const template = document.querySelector('.template').content;
const list = document.querySelector(".list");
const newFragment =  document.createDocumentFragment();

submitBtn.addEventListener("click", ()=>{

   
    const searchQuery = document.getElementById("js-search").value;
    
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        list.innerHTML = "";
        render(data.Search);
        document.getElementById("js-search").value = "";
      })
      .catch((error) => {
        console.error(error);
      });
});



function render(data) {
    data.forEach(item => {
      const listItem = template.cloneNode(true);
      listItem.querySelector('.card-img').src = item.Poster;
      listItem.querySelector('.card-title').textContent = item.Title;
      listItem.querySelector(".year").textContent = `Year: ${item.Year}`;
      newFragment.appendChild(listItem);
    });
  
    list.appendChild(newFragment);
}
