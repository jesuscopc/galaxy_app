import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme'

describe('Suit test - Header Component', () => {
  test('its defined', () => {
    const wrapper =  shallow(<Header />)
    expect(wrapper.find('.wrapp__header')).toBeTruthy();
  })
  
})
