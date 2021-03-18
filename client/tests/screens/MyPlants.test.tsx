import React from 'react';
import { render } from '@testing-library/react-native';
import { enableFetchMocks } from 'jest-fetch-mock';
import { FetchMock } from 'jest-fetch-mock';
import data from '../../mock';
import MyPlants from '../../screens/MyPlants/MyPlants';

enableFetchMocks();

const fetchMock = fetch as FetchMock;

it('renders correctly across screens', () => {
  fetchMock.mockResponseOnce(JSON.stringify(data));
  
  const { getByText } = render(<MyPlants {} />);
  getByText('ADD PLANT');
});
