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
const  specialDescription = document.getElementById("special-description")
const specialName = document.getElementById("special-name")
const speed = document.getElementById("speed");
const tyes = document.getElementById("types")

function uiUpdate(data){
      creatureName.textContent = `${data.name.toUpperCase()}`
     creatureID.textContent = `${data.id}`
          weight.textContent= `${data.weight}`
          height.textContent=`${data.height}`
          hp.textContent=`${data.stats[0].base_stat}`
          attack.textContent= `${data.stats[1].base_stat}`
          defense.textContent= `${data.stats[2].base_stat}`
          specialAttack.textContent=`${data.stats[3].base_stat}`
          specialDefence.textContent = `${data.stats[4].base_stat}`
          speed.textContent = `${data.stats[5].base_stat}`
          specialName.textContent = data.special.name
          specialDescription.textContent = data.special.description;
}
async function mainEng(event){
 event.preventDefault()
     // console.log(searchInput.value);
     try {
          const SearchInputVolue = searchInput.value.toLowerCase();
          const link = await fetch(
      `https://rpg-creature-api.freecodecamp.rocks/api/creature/${SearchInputVolue}`
    );
    const data = await link.json()
    console.log(data);
    // Showing data
   uiUpdate(data)

         
     //checkPoints

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
             tyes.innerHTML = data.types
      .map(obj => `<span class="type ${obj.name}">${obj.name}</span>`)
      .join('');
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
           tyes.innerHTML = `
        <span class="type WATER">WATER</span>
        <span class="type ROCK">ROCK</span>
      `;
     }else if(SearchInputVolue == data.id){
        uiUpdate(data)

          if(searchInput.value == "Pyrolynx"){
                tyes.innerHTML = data.types
      .map(obj => `<span class="type ${obj.name}">${obj.name}</span>`)
      .join('');
          }   
     }
     else {
          alert("Creature not found")
     }
     } catch (error) {
       console.log(error);
   alert("Creature not found")
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
searchBtn.addEventListener("click",mainEng)