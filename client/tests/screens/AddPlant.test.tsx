import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { enableFetchMocks } from 'jest-fetch-mock';
import { FetchMock } from 'jest-fetch-mock';
import data from '../../mock';
import Home from '../../screens/AddPlant/AddPlant';

enableFetchMocks();

const fetchMock = fetch as FetchMock;

it('renders correctly across screens', async () => {
  fetchMock.mockResponseOnce(JSON.stringify(data));

  const { getByText } = render(<Home />);
  await waitFor(() => {
    const rendered = getByText('ADD PLANT');
    expect(rendered).toBeTruthy();
  });
});
