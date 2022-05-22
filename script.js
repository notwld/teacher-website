let typed = new Typed(".typed", {
    strings: [
      "English Composition and Comprehension",
      "	Communication Skills",
      "Technical and Business Writing",
      " Sir Anzar Aalam's teaching content.",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });


      let home = document.querySelector("#home");
      let about = document.querySelector("#about");
      let content = document.querySelector("#content");
      let contact = document.querySelector("#contact");
      let links = document.querySelectorAll(".nav_link");
      let footer = document.querySelector("footer");

      links.forEach(element => {
          element.addEventListener("click", ()=>{
              if(element.textContent == "Home"){
                  home.style.display = "block";
                  about.style.display = "none";
                  content.style.display = "none";
                  contact.style.display = "none";
                  footer.style.display = "flex";
              }
              else if(element.textContent == "About"){
                  home.style.display = "none";
                  about.style.display = "block";
                  content.style.display = "none";
                  contact.style.display = "none";
                  footer.style.display = "flex";
              }
              
              else if(element.textContent == "Content"){
                  home.style.display = "none";
                  about.style.display = "none";
                  content.style.display = "block";
                  contact.style.display = "none";
                  footer.style.display = "none";

              }
              else if(element.textContent == "Contact"){
                  home.style.display = "none";
                  about.style.display = "none";
                  content.style.display = "none";
                  contact.style.display = "block";
                  footer.style.display = "flex";
              }
              else{
                  return
              }

          });
      });

let course = document.querySelector("#course");
let course_name = document.querySelector("#course_name");
let slide_links = document.querySelectorAll(".slide_links");
let eng = document.querySelectorAll(".eng");
let com = document.querySelectorAll(".com");
let tech = document.querySelectorAll(".tech");
let folders = document.querySelectorAll(".folder");


folders.forEach(element => {
    element.addEventListener("click", ()=>{

        course.textContent = element.textContent;
        course_name.textContent = element.textContent;

        if(element.textContent.split(" ").filter(word => word.length > 0).join("").toString()=="\nEnglishComposition"){
            for (let index = 0; index <15; index++) {
                slide_links[index].href = `\\illustrations\\illustration-${index+1}.svg`;
                slide_links[index].innerHTML=`EngSlide ${index+1}`;	
                course_name.href = 'www.google.com'
            }
        }
        else if(element.textContent.split(" ").filter(word => word.length > 0).join("").toString()=="\nCommunicationSkills"){
            for (let index = 0; index <15; index++) {
                slide_links[index].href = `\\illustrations\\illustration-${index+1}.svg`;
                slide_links[index].innerHTML=`ComSlide ${index+1}`;	
                course_name.href = 'www.google.com'
            }
        }
        else if(element.textContent.split(" ").filter(word => word.length > 0).join("").toString()=="\nTechnicalandBusinessWriting"){
            for (let index = 0; index <15; index++) {
                slide_links[index].href = `\\illustrations\\illustration-${index+1}.svg`;
                slide_links[index].innerHTML=`TBWSlide ${index+1}`;	
                course_name.href = 'www.google.com'
            }
        }
        else{
            return
        }
          });
});



let contact_btn = document.getElementById("btn0")

contact_btn.addEventListener("click",()=>{
    home.style.display = "none";
    about.style.display = "none";
    content.style.display = "none";
    contact.style.display = "block";
})

let arr = []

slide_links.forEach(element=>{
    element.addEventListener("mouseover",()=>{
        arr.push(element.innerHTML)
        element.innerHTML = "Download"
        console.log(arr)
    })
    element.addEventListener("mouseout",()=>{
        element.innerHTML = arr.slice(-1)
        arr.pop(arr.slice(-1))
        console.log(arr)
    })
    
})

course_name.addEventListener("mouseover",(e)=>{
    arr.push(course_name.innerHTML)
    course_name.innerHTML = "Download"
    console.log(arr)
})
course_name.addEventListener("mouseout",(e)=>{
    course_name.innerHTML = arr.slice(-1)
    arr.pop(arr.slice(-1))
    console.log(arr)
})