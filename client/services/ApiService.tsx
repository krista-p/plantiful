export {};
const baseURL = process.env.IP;

export function fetchRequest(path: string, options: object) {
  return fetch(baseURL + path, options)
    .then((res) => (res.status === 204 ? res : res.json()))
    .catch((error) => {
      console.log(`Error fetching ${path}`, error); // eslint-disable-line no-console
    });
}

export function getPlants() {
  return fetchRequest('/plants', {});
}

export function findPlant(name: string) {
  return fetchRequest(`/plants/${name}`, {});
}

export function getUserPlants() {
  return fetchRequest('/userplants', {});
}

export function updateNextWater(id: string, body: object) {
  return fetchRequest(`/userplants/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export function deleteUserPlant(id: string) {
  return fetchRequest(`/userplants/${id}`, {
    method: 'DELETE',
  });
}

export function postPlant(body: object) {
  return fetchRequest('/userplants', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

// module.exports = {
//   getPlants,
//   findPlant,
//   postPlant,
//   getUserPlants,
//   updateNextWater,
//   deleteUserPlant,
// };
