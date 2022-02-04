var h1 = document.getElementsByTagName("h1");
var followers = document.getElementsByClassName("followers");

let count = 1;
setInterval(() => {
    if (count<1000) {
        count++;
        h1[0].innerHTML= count;
    }
}, 0.1);

setTimeout(() => {
    followers[0].innerHTML= "Instagram Followers";
}, 5994);
