import React from 'react';
import Satellites from '../../root/Satellites';
import { shallow } from 'enzyme';

describe('Suit test - Satellites Page', () => {
  test('should be defined', () => {
    const wrap = shallow(<Satellites />)
    expect(wrap.find('.container').exists()).toBeTruthy();
  });  
  
})
