let URL = "http://localhost:3456/api";

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json"
    }
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}


function apiFacade() {

  function getPersons() {
    return fetch(URL).then(handleHttpErrors);
  }

  function addEditPerson(person) {
    if (person.id === "") {
      return fetch(URL,  makeOptions("POST", person)).then(handleHttpErrors);

    } else {
      return fetch(URL + "/" + person.id,  makeOptions("PUT", person)).then(handleHttpErrors);
    }
  }

  function deletePerson(id) {
    return fetch(URL + "/" + id, makeOptions("DELETE")).then(handleHttpErrors);
  }

  return {
    getPersons,
    addEditPerson,
    deletePerson
  };
}
const returnValue = apiFacade();
export default returnValue;
