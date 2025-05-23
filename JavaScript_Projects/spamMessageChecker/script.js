const messageInput = document.getElementById("message-input")
const result = document.getElementById("result")
const checkMessageButton = document.getElementById("check-message-btn")

// to chick the donation spans
const helpRegex = /please help|assist me/i 
// to chick the asking money spams
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
// to chick the pharase free money (some messages contains 3 instead of e)((?:^|\s) use to replace spaces)
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
// to chick stok alert
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
// to chick dear friend
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

const denyList = [helpRegex,dollarRegex,freeRegex,stockRegex,dearRegex]
const isSpam = (msg)=> denyList.some(regex => regex.test(msg))
checkMessageButton.addEventListener("click",()=>{
     if(messageInput.value === "") {
          alert("Please enter a message.")
          return
     }
result.textContent = isSpam(messageInput.value)? "Oh no! This looks like a spam message." : "This message does not seem to contain any spam."
messageInput.value = ""
})