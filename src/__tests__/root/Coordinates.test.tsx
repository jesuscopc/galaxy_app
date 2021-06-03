import React from 'react';
import Coordinates from '../../root/Coordinates';
import { shallow, mount } from 'enzyme'
describe('Suit test - Coordinates Page', () => {
  test('should be defined', () => {
    const wrap = shallow(<Coordinates />)
    expect(wrap.find('.satellites').exists()).toBeTruthy();
  });

  test('should be getLocation by satellite', () => {
    const wrap = mount(<Coordinates />);
    wrap.find('input').at(0).simulate('change', { target: { value: '100.0' } });
    wrap.find('#getLocationButton').at(0).simulate('click');
    expect(wrap.find('.modal').exists()).toBeTruthy();
  })

  test('should be getMessage by satellite', () => {
    const wrap = mount(<Coordinates />);
    wrap.find('input').at(0).simulate('change', '100');
    wrap.find('#getMessageButton').at(0).simulate('click');
    expect(wrap.find('.modal').exists()).toBeTruthy();
  })
  
  
})
