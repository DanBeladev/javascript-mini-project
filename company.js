let symbol = '';

function linkElements(companyObj) {
  document.getElementById('name').innerHTML = companyObj.companyName || '';
  document.getElementById('icon').src = companyObj.image || '';
  document.getElementById('symbol').innerHTML = companyObj.symbol || '';
  document.getElementById('sector').innerHTML =
    `${companyObj.sector}, ${companyObj.industry}` || '';
  document.getElementById('price').innerHTML =
    `Price: ${companyObj.price}$` || '';
  document.getElementById('description').innerHTML =
    companyObj.description || '';
  const websiteElem = document.getElementById('website');
  if (companyObj) {
    websiteElem.innerHTML = companyObj.website;
    websiteElem.href = companyObj.website;
  } else {
    document.getElementById('visit').innerHTML = '';
    websiteElem.innerHTML = '';
    websiteElem.href = '#';
  }
  if (companyObj.ceo) {
    document.getElementById('ceo-name').innerHTML = companyObj.ceo;
  } else {
    document.getElementById('ceo-name').innerHTML = '';
    document.getElementById('ceo').innerHTML = '';
  }
}

async function getCompanyDataFunc(symbol) {
  try {
    const data = await getCompanyData(symbol);
    const companyObj = data[0];
    linkElements(companyObj);
  } catch (err) {
    console.log(err);
  }
}

symbol = getParameterByName('symbol');

const companyData = getCompanyDataFunc(symbol);
