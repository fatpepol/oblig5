async function getData() {
  try {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/masquerain'
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`${error}: cockshitterton`);
  }
}

async function displayData() {
  const data = await getData();
  console.log(data);
}
