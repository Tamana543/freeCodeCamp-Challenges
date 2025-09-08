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
const tyes = document.getElementById("types")
function mainEng(event){
 event.preventDefault()
     // console.log(searchInput.value);
     try {
          if(searchInput.value=="Red"){
          alert("Creature not found")
     }else if(searchInput.value == "Pyrolynx"){
          creatureName.textContent="PYROLYNX"
     creatureID.textContent = '#1'
          weight.textContent="Weight: 42"
          height.textContent="Height: 32"
          hp.textContent=65
          attack.textContent=80
          defense.textContent= 50
          specialAttack.textContent= 90
          specialDefence.textContent = 55
          speed.textContent = 100
     }else if(searchInput.value == 2){
            creatureName.textContent="AQUOROC"
     creatureID.textContent = '#2'
          weight.textContent="Weight: 220"
          height.textContent="Height: 53"
          hp.textContent= 85
          attack.textContent= 90
          defense.textContent= 120
          specialAttack.textContent= 60
          specialDefence.textContent = 70
          speed.textContent = 40
     }else {
          alert("Creature not found")
     }
     } catch (error) {
       console.log(error);

       resetDisplay()
     }
     
     
}

const resetDisplay = () => {
     // reset stats
     creatureName.textContent = '';
     creatureID.textContent = '';
     height.textContent = '';
     weight.textContent = '';
  tyes.innerHTML = '';
  specialName.innerHTML = '';
  specialDescription.innerHTML = '';
  hp.textContent = '';
  attack.textContent = '';
  defense.textContent = '';
  specialAttack.textContent = '';
  specialDefence.textContent = '';
  speed.textContent = '';
  searchInput.value = ""
};
searchBtn.addEventListener("click",(event)=>{
    
})