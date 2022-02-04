var h1 = document.getElementsByTagName("h1");
var followers = document.getElementsByClassName("followers");

let count = 1;
setInterval(() => {
    if (count<500) {
        count++;
        h1[0].innerHTML= count;
    }
}, 0.1);

setTimeout(() => {
    followers[0].innerHTML= "LinkedIn Followers";
}, 5994);
