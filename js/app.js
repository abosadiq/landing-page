const sections = document.querySelectorAll("section");
const ul = document.getElementById("navbar__list");
const getSection = document.querySelectorAll("section[data-nav]");

// Convert the NodeList to an Array
const array = [...sections];
// console.log(array[0]);

// IIFE function to create the Nav Bar
function navBar(items) {
  for (i in items) {
    let tag = items[i].dataset.nav;
    console.log(tag);
    let text = document.createTextNode(tag);
    const list = document.createElement("li");
    const a = document.createElement("a");
    const id = `#${tag.toLowerCase().replace(/\s/g, "")}`;
    console.log(id);
    a.setAttribute("href", id);
    a.appendChild(text);
    a.setAttribute("class", "links");
    list.appendChild(a);
    ul.appendChild(list);
  }
}
navBar(array);

// make an array with all anchor tag
const arr = document.querySelectorAll("a");
// loop through the tags for smooth scroll

arr.forEach(a => {
  a.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  });
});

const changeState = () => {
  let i = 3;

  Array.from(sections, e => (array[e.id] = e.offsetTop));

  window.addEventListener("scroll", function() {
    let scrollPosition = document.documentElement.scrollTop;
    let link;
    let previouslink;
    let ispreviousactive = false; // setting previouse link to flase
    for (i in array) {
      if (array[i] - 200 <= scrollPosition) {
        //  e.preventDefault();
        // previouslink = document.querySelector("a[href*=" + i + "]");
        if (ispreviousactive) {
          previouslink = link;
          previouslink.classList.remove("active");
        }
        link = document.querySelector("a[href*=" + i + "]");

        link.classList.add("active");
        ispreviousactive = true;
      }

      if (array[i] - 200 >= scrollPosition) {
        link = document.querySelector("a[href*=" + i + "]");
        link.classList.remove("active");
        // sections.classList.remove("active-section");
      }
    }
  });
};

changeState();
