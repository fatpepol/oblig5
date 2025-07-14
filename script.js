async function getData() {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/masquerain'
    );
    
    const data = await response.json();
    return data;
}

async function displayData() {
  const data = await getData();

 const allStats = document.querySelector("#statText");
 const spriteHtml = document.querySelector("#sprite");

 const sprite = document.createElement("img");
 sprite.src = data.sprites.front_default;

 spriteHtml.appendChild(sprite);
 


  data.stats.forEach(element => {
    const listItem = document.createElement("p");
    listItem.textContent = element.stat.name + " " + element.base_stat;
    allStats.appendChild(listItem);
    
    console.log(element.stat.name + " " +element.base_stat );
  });
}

displayData();