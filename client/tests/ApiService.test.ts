import { enableFetchMocks } from 'jest-fetch-mock';
import { FetchMock } from 'jest-fetch-mock';
import { fetchRequest } from '../services/ApiService';
import data from '../mock';

enableFetchMocks();

const fetchMock = fetch as FetchMock;

it('gets plants', async () => {
  fetchMock.mockResponseOnce(JSON.stringify(data));

  const plants = await fetchRequest('/plants', {});

  expect(plants).toEqual(data);
});
