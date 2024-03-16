
      let a=["https://xvicollective.com.au/wp-content/uploads/2020/10/Salon-XVI-Tile-Inside.jpg","https://static.wixstatic.com/media/10c8c9_d0fecb660094499592573224c5009192~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/10c8c9_d0fecb660094499592573224c5009192~mv2.jpg","https://media.istockphoto.com/id/1856117770/photo/modern-beauty-salon.jpg?s=612x612&w=0&k=20&c=dVZtsePk2pgbqDXwVkMm-yIw5imnZ2rnkAruR7zf8EA=",
"https://salonbizsoftware.com/wp-content/uploads/2021/01/salon-square-footage.jpg","https://amr.com.au/cdn/shop/articles/6-clean-sustainable-hair-care-brands-that-wont-break-your-budget-886186.jpg?crop=center&height=404&v=1696461243&width=1080","https://wallpapers.com/images/hd/hair-salon-background-ocd8o0oatvbqyg39.jpg",]
   
      let imgr=document.querySelector(".con0 img")
      let dotr=document.querySelectorAll(".dotcon i")
      let i=0
      function fwd()
      {
          dotr[i].className="fa-regular fa-circle"
          i=(i+1)%a.length
          dotr[i].className="fa-solid fa-circle"
          imgr.src=a[i]
         
      }
      function bkw()
      {
          dotr[i].className="fa-regular fa-circle"
          i--
          if(i==-1)
          {
              i=5
          }
          dotr[i].className="fa-solid fa-circle"
          imgr.src=a[i]
      
      }
      function seti(ind)
      {
          
          dotr[i].className="fa-regular fa-circle"
          i=ind
          dotr[i].className="fa-solid fa-circle"
          imgr.src=a[i]
         
      }
      setInterval(fwd,2000)


  


