// const loadQuotes = () =>{
//     fetch('https://api.kanye.rest/')
//     .then (res => res.json())
//     .then (data => displayQuote(data));
// }
// const displayQuote = quote => {
//     console.log(quote.quote);
//     const quoteElement = document.getElementById('qoute');
//     quoteElement.innerText = quote.quote;
// }
// const loadQuotes = () =>{
//     fetch('https://randomuser.me/api/?results=5')
//     .then(res => res.json())
//     .then(data => displayBuddies(data));
// }
// loadQuotes();
// const displayBuddies = data =>{
//     const buddies = data.results;
//     const buddesDiv = document.getElementById('buddies');
//     console.log(data.results);
//     for(const buddy of buddies){
//         console.log(buddy.email);
//         console.log(buddy.name.first);
//         const h2 = document.createElement('h2');
//         h2.innerText =`Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}`;
//         buddesDiv.appendChild(h2);
//         const p = document.createElement('p');
//         p.innerText = `Email: ${buddy.email}
//         Gender: ${buddy.gender}
//         Location: 
//             'Street: ${buddy.location.street.name} ${buddy.location.street.number} 
//             City: ${buddy.location.city} 
//             State: ${buddy.location.state} 
//             Country: ${buddy.location.country} 
//             Postcode: ${buddy.location.postcode}'`;
//         buddesDiv.appendChild(p);
//     }
// }
const loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
loadCountries();
const displayCountries = data =>{
    const countryDiv = document.getElementById('countries');
    // for(const country of data){
    //     console.log(country);
    //     const h2 = document.createElement('h2');
    //     h2.innerText = country.name;
    //     countryDiv.appendChild(h2);

    // }
    data.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML =`
        <h3>${country.name}</h3>
        <button onclick="loadCountryByName('${country.name}')">Show Details</button>
        `;
        // const h2 = document.createElement('h2');
        // h2.innerText = country.name;
        // div.appendChild(h2);
        // const p = document.createElement('p');
        // p.innerText =`Capital: ${country.capital}`;
        // div.appendChild(p);
        countryDiv.appendChild(div);
    });
}
const loadCountryByName = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => displayCountryDetail(data[0]));
    // console.log('button clock');
}
const displayCountryDetail = details =>{
    const detailSection = document.getElementById('country-detail');
        detailSection.innerHTML=`
        <h2>${details.name}</h2>
        <p>capital: ${details.capital}</p>
        <p>Population: ${details.population}</p>
        <img width="200px" src="${details.flag}">
        `;
}