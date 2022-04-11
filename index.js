content = document.querySelector(".content");
welcome = content.querySelector(".welcome");
blog = content.querySelector(".blog");
title = blog.querySelector(".blogCard").querySelector("h1");
byline = blog.querySelector(".blogCard").querySelector("h2");
blogContent = blog.querySelector(".blogCard").querySelector("div");
foot = blog.querySelector(".blogCard").querySelector("footer");
prevButton = document.querySelector(".left");
nextButton = document.querySelector(".right");
let blogCounter;
let blogLength;

console.log(blogContent);


function fillBlogData(blogNum) {
    fetch("https://adg-rec-task.herokuapp.com").then(res => {
            return res.json();
        }).then(resData => {
            title.innerHTML = resData[blogNum]["title"];
            byline.innerHTML = resData[blogNum]["author"];
            blogContent.innerHTML = resData[blogNum]["details"];
            blogLength = resData.length;

        });
}

nextButton.addEventListener("click", () =>{
    if(welcome.classList[1] == "collapse-false")
    {
        blogCounter = 0
        fillBlogData(blogCounter++);
        welcome.classList.replace("collapse-false","collapse-true");
        blog.classList.replace("collapse-true","collapse-false");
    }
    else if(blogCounter>=blogLength)
    {
        
    }
    else
    {
        fillBlogData(blogCounter++);
    }
});


prevButton .addEventListener("click", ()=>{
    if(welcome.classList[1] == "collapse-false"){}
    else if(blogCounter == 0)
    {
        welcome.classList.replace("collapse-true","collapse-false");
        blog.classList.replace("collapse-false","collapse-true");
    }
    else
    {
        fillBlogData(--blogCounter);
    }
});