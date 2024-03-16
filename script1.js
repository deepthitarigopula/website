 let a1=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxQ1thccEEx1MFTjQwFLITPqNRu9Ih5-i1w&usqp=CAU","https://shaadiwish.com/blog/wp-content/uploads/2022/12/2-3.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNtXbpDbOkIACr-YgGooVNEn0nf2s2p7VlQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMe83Gk7IMNwBi-JX_Hb-8_MG7Z--wQuUvxY3WIJxXWIXhH3IQv29BnBrYcKNxn8_50O4&usqp=CAU"]
let obj=["Good service provided here. Stylist Selvi is very professional and renders perfect and a neat service.","Nadiya Mam did the wedding makeup for both the bride and groom, and they loved the outcome.","The facial and detan done by kanchana was mind blowing","Loved the haircut I got at manea"]
let imr=document.querySelector(".con5 img")
let dor=document.querySelectorAll(".dotcon1 i")
let pr=document.getElementsByTagName("em")[0]
      let j=0
      function fwd1()
      {
          dor[j].className="fa-regular fa-circle"
          j=(j+1)%a1.length
          dor[j].className="fa-solid fa-circle"
          imr.src=a1[j]
          pr.innerHTML=obj[j]
         
      }
      function bkw1()
      {
          dor[j].className="fa-regular fa-circle"
          j--
          if(j==-1)
          {
              j=3
          }
          dotr[j].className="fa-solid fa-circle"
          imr.src=a1[j]
          pr.innerHTML=obj[j]
      
      }
      function setj(ind)
      {
          
          dor[j].className="fa-regular fa-circle"
          j=ind
          dor[j].className="fa-solid fa-circle"
          imr.src=a1[j]
          pr.innerHTML=obj[j]
         
      }
      setInterval(fwd1,2000)


  