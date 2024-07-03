const accessKey = "0aI7ISUN15IUW5-SItw_lcdBDQr5txshtcpXovsf1mU";
let searchReult = document.getElementById('search_reult')
let showMoreBtn = document.getElementById('show_more_btn')
let searchInput = document.getElementById('search-box')
let searchForm = document.getElementById('search-form')

let keyword = '';

let page = 1;


async function searchImage() {
    keyword = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
 &client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

if(page===1){
    searchReult.innerHTML='';
}
    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_balnk";
        imageLink.appendChild(image);
        searchReult.appendChild(imageLink);
    

    })

    showMoreBtn.style.display='block';

}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage()
})

showMoreBtn.addEventListener("click",()=>{

    page++;
    searchImage()
})