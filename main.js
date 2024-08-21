let h1 = document.createElement("h1")  //tag yaratish

let div = document.querySelector("div")

h1.innerHTML = 'loremip sum follor set'  //tegga text berish


// div.append(h1) // tagni hmtlga qoshish
// div.after(h1)
// div.before(h1)
div.prepend(h1)    

h1.classList.add("jahongir004")
// h1.classList.remove("jahongir004")


let text = document.querySelector(".bilol")


text.classList.remove('abzal')