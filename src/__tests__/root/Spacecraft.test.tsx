import React from 'react';
import Spacecraft from '../../root/Spacecraft';
import { shallow } from 'enzyme';
jest.mock('../../services/galaxy.service.ts', () => ({getTopSecret: jest.fn()})); 

describe('Suit test - Coordinates Page', () => {
  test('should be defined', () => {
    const wrap = shallow(<Spacecraft />)
    expect(wrap.find('.container').exists()).toBeTruthy();
  });
  
  
  test('should be defined', () => {
    const wrap = shallow(<Spacecraft />)
    wrap.find('button').simulate('click');
    expect(wrap.find('span').exists()).toBeFalsy();
  });
  
})
