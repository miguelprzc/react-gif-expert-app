import React from 'react';
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";
import { GifGrid } from '../components/GifGrid';

describe('GifExpertApp', () => {

  test('should render the GifExpertApp properly', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should ', () => {
    const categories = ['Dragon Ball', 'Dexter'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
  
  
});
