async function getData() {
  try {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/masquerain'
    );
    
    const data = await response.json();
    return data;
  }catch{
    console.error(`${error}: an error has occurred`);
    const container = document.querySelector("#statText");
    const message = document.createElement("p");
    message.textContent = error;
    container.appendChild(message);
  }
}

async function displayData() {
  const data = await getData();

 const allStats = document.querySelector("#statText");
 const spriteHtml = document.querySelector("#sprite");

 const sprite = document.createElement("img");
 sprite.src = data.sprites.front_default;
 sprite.className = "sprite";

 spriteHtml.appendChild(sprite);
 


  data.stats.forEach(element => {
    const listItem = document.createElement("p");
    listItem.textContent = element.base_stat + " " + element.stat.name;
    listItem.className = "stats"
    allStats.appendChild(listItem);
    
    console.log(element.stat.name + " " + element.base_stat );
  });
}

displayData();