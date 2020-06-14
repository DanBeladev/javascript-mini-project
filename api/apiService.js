const API_KEY = '1ba5b501bc2107505d774375b8abf7ca';
const API_URL = `https://financialmodelingprep.com/api/v3/search?query=`;
const API_URL_EXTENSION = `&limit=10&exchange=NASDAQ&apikey=${API_KEY}`;
const COMPANY_URL = `https://financialmodelingprep.com/api/v3/profile/`;

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

async function getCompanies(query) {
  const url = `${API_URL}${query}${API_URL_EXTENSION}`;
  const data = sendRequest(url, []);
  return data;
}

async function getCompanyData(symbol) {
  const url = `${COMPANY_URL}${symbol}?apikey=${API_KEY}`;
  const data = sendRequest(url, []);
  return data;
}

//private functions
async function sendRequest(url, falsyResponse) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return falsyResponse;
  }
}
