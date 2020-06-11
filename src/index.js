let queryToSend = '';
const API_KEY = '1ba5b501bc2107505d774375b8abf7ca';
const API_URL = `https://financialmodelingprep.com/api/v3/search?query=${queryToSend}&limit=10&exchange=NASDAQ&apikey=${API_KEY}`;
const COMPANY_URL = `https://financialmodelingprep.com/api/v3/profile/`;
function showSpinner(spinner) {
  spinner.className = 'show';
}
function hideSpinner(spinner) {
  spinner.className = '';
}

async function searchClicked() {
  const list = document.getElementById('myUL');
  while (list.firstChild) {
    list.removeChild(list.lastChild);
  }
  const spinner = document.getElementById('spinner');
  const input = document.getElementById('myInput');
  const inputValue = input.value;
  queryToSend = inputValue;
  input.value = '';
  try {
    showSpinner(spinner);
    var response = await fetch(API_URL);
    var data = await response.json();
    data.forEach((item) => {
      let liElement = document.createElement('li');
      const text = `${item.name}, (${item.symbol})`;
      const link = document.createElement('a');
      link.appendChild(document.createTextNode(text));
      link.href = '#';
      liElement.appendChild(link);
      list.appendChild(liElement);
    });
    hideSpinner(spinner);
  } catch (err) {
    console.log(err);
  }
}
