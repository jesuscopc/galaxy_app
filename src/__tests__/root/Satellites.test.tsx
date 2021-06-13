import React from 'react';
import Satellites from '../../root/Satellites';
import { SATELLITES } from '../../constants';
import { shallow } from 'enzyme';

describe('Suit test - Satellites Page', () => {
  const wrap = shallow(<Satellites />)
  test('should be defined', () => {
    expect(wrap.find('.container').exists()).toBeTruthy();
  });  
  
  test('getSatellitePosition should be called', async() => {
    wrap.find('button').last().simulate('click');
    setTimeout(() => {
      expect(wrap.find('span').at(1).text()).toBe(SATELLITES[2].message.toString());
    }, 1000);
  })
  
  
})
