(function () {
  const input = document.querySelector('.search');
  const ul = document.querySelector('.suggestions');
  const endpoint =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  const data = [];

  fetch(endpoint)
    .then((d) => d.json())
    .then((r) => data.push(...r));

  function cityToMatch(wordToMatch, cities) {
    return cities.filter((place) => {
      const rgx = new RegExp(wordToMatch, 'gi');
      return place.city.match(rgx) || place.city.match(rgx);
    });
  }

  function handleInput(e) {
    const typeAhead = cityToMatch(this.value, data);
    let displayData = '';
    typeAhead.forEach((t) => {
      highlightedWord = `<span class='h1'>${this.value}</span>`
      displayData += `<li>${highlightedWord}, ${t.state}</li>`;
    });
    ul.innerHTML = displayData;
  }
  input.addEventListener('input', handleInput);
})();
