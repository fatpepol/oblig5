async function getData() {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/masquerain'
    );
    
    const data = await response.json();
    return data;
}

async function displayData() {
  const data = await getData();
  data.stats.forEach(element => {
    console.log(element.stat.name + " " +element.base_stat );
  });
}

displayData();