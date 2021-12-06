import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('AddCategory', () => {
  const setCategories = jest.fn();
  const setInputValue = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  
  test('should render AddCategory properly', () => {
    
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should change the input box', () => {
    const input = wrapper.find('input');
    input.simulate('change', {target: {value: 'Hello world'}});
    
    //expect(setInputValue).toHaveBeenCalled();
  });
  
  test('should not post information on submit', () => {
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    
    expect(setCategories).not.toHaveBeenCalled();
  });
  
  test('should call setCategories and clean input box', () => {
    const input = wrapper.find('input');
    input.simulate('change', {target: {value: 'Hello world'}});
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    
    expect(setCategories).toHaveBeenCalled();
    expect(input.text()).toBe('');
  });
  
  
  
});