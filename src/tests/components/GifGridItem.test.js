import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('GifGridItem', () => {

  const title = "A title";
  const url = "https://localhost/something.gif";

  const wrapper = shallow(<GifGridItem title={title} url={url}/>);

  test('should show <GifGridItem /> properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should have a figcaption with the title', () => {
    const figcaption = wrapper.find('figcaption');
    
    expect(figcaption.text().trim()).toBe(title); 
  });

  test('should have an img with the url as url and the alt as title', () => {
    const img = wrapper.find('img');
    const {src, alt} = img.props();
    
    expect(src).toBe(url); 
    expect(alt).toBe(title); 
  });

  test('should have a animate_fadeInUp as a css class', () => {
    const figure = wrapper.find('figure');
    const {className} = figure.props();

    expect(className.includes('animate__fadeInUp')).toBeTruthy();
  });
  
  

});

