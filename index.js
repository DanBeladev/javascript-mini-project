let queryToSend = '';

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
    const data = await getCompanies(queryToSend);
    data.forEach((item) => {
      let liElement = document.createElement('li');
      const text = `${item.name}, (${item.symbol})`;
      const link = document.createElement('a');
      link.appendChild(document.createTextNode(text));
      link.href = `company.html?symbol=${item.symbol}`;
      liElement.appendChild(link);
      list.appendChild(liElement);
    });
    hideSpinner(spinner);
  } catch (err) {
    console.log(err);
  }
}
