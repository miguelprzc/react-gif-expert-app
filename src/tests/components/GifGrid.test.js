import React from 'react';
import '@testing-library/jest-dom'; 

import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('', () => {
  const category = 'Dexter'; 

  test('should render the GifGrid component properly', () => {
     useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render the GifGrid component properly after the useFecthGifs return a response', () => {
    const gifs = [{id: 'Gif ID', title: 'Gif Title', url: 'Gif URL'},{id: 'Gif ID2', title: 'Gif Title', url: 'Gif URL'}];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBeFalsy();
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
  
  
});