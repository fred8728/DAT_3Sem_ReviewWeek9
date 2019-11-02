
function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

const countryFacade = () => {

  const getLabels = () => {
    return fetch('http://localhost:3333/labels').then(handleHttpErrors)
  }

  const getCountries = () => {
    return fetch('http://localhost:3333/countries').then(handleHttpErrors)
  }
  return {
    getLabels,
    getCountries
  }
}

export default  countryFacade();