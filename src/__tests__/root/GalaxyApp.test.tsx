import React from 'react';
import GalaxyApp from '../../root/GalaxyApp';
import { shallow } from 'enzyme';

describe('Suit test - GalaxyApp Page', () => {
  test('should be defined', () => {
    const wrap = shallow(<GalaxyApp />)
    expect(wrap.find('div').exists()).toBeTruthy();
  });  
  
})
