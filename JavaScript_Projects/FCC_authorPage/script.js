const authorContainer = document.getElementById("author-container");
const loadMoreBtn = document.getElementById("load-more-btn");

fetch(
"https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json"
)
.then(res=>res.json()).then(data=>{
     // console.log(data);
     authorDataArr =data
     // console.log("Author Data Array:",authorDataArr);
     displayAuthors(authorDataArr.slice(startingIndex,endingIndex))
}).catch(err=>console.log(`There was an error: ${err}`))

const fetchMoreAuthors = ()=>{
     startingIndex += 8 
     endingIndex += 8
     displayAuthors(authorDataArr.slice(startingIndex,endingIndex))
}
let startingIndex= 0;
let endingIndex= 8;
let authorDataArr= [];

const displayAuthors =(authors)=>{
authors.forEach(({author,image,url,bio},index)=> {
     authorContainer.innerHTML+=`
     <div id="${index}" class="user-card">
     <h2 class="author-name">${author}</h2>
      <img src="${image}" alt="${author} avatar" class="user-img">
      <p class="bio">${bio}</p>
       <a href="${url}" target="_blank" class="author-link">${author}'s author page</a>
     </div>
     `
});
} ;
loadMoreBtn.addEventListener("click",fetchMoreAuthors)