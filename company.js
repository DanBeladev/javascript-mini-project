let symbol = '';

function setInnerHtml(id, text) {
  element = document.getElementById(id);
  switch (id) {
    case 'website':
      if (text) {
        element.href = text;
      } else {
        element.href = '#';
        document.getElementById('visit').innerHTML = '';
      }
      break;
    case 'ceo-name':
      if (!text) {
        document.getElementById('ceo').innerHTML = '';
      }
      break;
    case 'icon':
      text ? (element.src = text) : (element.src = '');
      return;

    default:
      break;
  }
  text ? (element.innerHTML = text) : (element.innerHTML = '');
}

function linkElements(companyObj) {
  const {
    companyName,
    image,
    symbol,
    sector,
    industry,
    price,
    description,
    website,
    ceo,
  } = companyObj;

  setInnerHtml('name', companyName);
  setInnerHtml('symbol', symbol);
  setInnerHtml('sector', `${sector}, ${industry}`);
  setInnerHtml('price', `Price: ${price}$`);
  setInnerHtml('description', description);
  setInnerHtml('website', website);
  setInnerHtml('ceo-name', ceo);
  setInnerHtml('icon', image);
}

async function getCompanyDataFunc(symbol) {
  try {
    const data = await getCompanyData(symbol);
    if(data.length!==0)
    {
      const companyObj = data[0];
      linkElements(companyObj);
    }
  } catch (err) {
    console.log(err);
  }
}

symbol = getParameterByName('symbol');

const companyData = getCompanyDataFunc(symbol);
