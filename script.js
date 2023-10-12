function getAllDatas() {
    fetch('https://api.openbrewerydb.org/v1/breweries')
        .then(response => response.json())
        .then(data => { console.log(data)
            data.forEach(drink => {
                createCard(drink);
            });
        })
        .catch(error => console.error('Error:', error));
  }
  
  function createCard(drink) {
    const createcard = document.createElement('div');
    createcard.classList.add('card', 'border-secondary');
    
    const cardbody = document.createElement('div');
    cardbody.classList.add('card-body', 'text-secondary');
    
    const brewerieName = document.createElement('p');
    brewerieName.classList.add('card-text');
    brewerieName.textContent = `Name: ${drink.name}`;
    
    const brewerieType = document.createElement('p');
    brewerieType.classList.add('card-text');
    brewerieType.textContent = `Type: ${drink.brewery_type}`;
  
    const brewerieCity= document.createElement('p');
    brewerieCity.classList.add('card-text');
    brewerieCity.textContent = `City: ${drink.city} `;

    const  brewerystate= document.createElement('p');
    brewerystate.classList.add('card-text');
    brewerystate.textContent = `State: ${drink.state} `;
  
createcard.appendChild(cardbody);
cardbody.appendChild(brewerieName);
cardbody.appendChild(brewerieType);
cardbody.appendChild(brewerieCity);
cardbody.appendChild(brewerystate);
  document.getElementById('card-container').appendChild(createcard);
  }
  
getAllDatas();
  
  
  

  

  
  
  