const searchBtn = document.getElementById("search-button") ;
const searchInput = document.getElementById("search-input");
const creatureName = document.getElementById("creature-name");
const creatureID = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefence = document.getElementById("special-defense");
const speed = document.getElementById("speed");


searchBtn.addEventListener("click",(event)=>{
     event.preventDefault()
     // console.log(searchInput.value);
     if(searchInput.value=="Red"){
          alert("Creature not found")
     }else if(searchInput.value == "Pyrolynx"){
          creatureName.textContent="PYROLYNX 1"
          weight.textContent="Weight: 42"
          height.textContent="Height: 32"
          hp.textContent=65
          attack.textContent=80
          defense.textContent= 50
          specialAttack.textContent= 90
          specialDefence.textContent = 55
          speed.textContent = 100
     }

     searchInput.value = ""
})