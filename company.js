let symbol='';

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


symbol = getParameterByName('symbol')

async function getCompanyDataFunc(symbol){
    const data = await getCompanyData(symbol);
    return data;
}

const companyDetails = getCompanyDataFunc(symbol);
console.log(companyDetails);
    
