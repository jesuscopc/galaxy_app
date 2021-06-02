import React from 'react';
import Coordinates from '../../root/Coordinates';
import { shallow } from 'enzyme'
describe('Suit test - Coordinates Page', () => {
  test('should be defined', () => {
    const wrap = shallow(<Coordinates />)
    expect(wrap.find('.satellites').exists()).toBeTruthy();
  })
  
})
