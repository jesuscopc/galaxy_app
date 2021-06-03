import React from 'react';
import Satellite from '../../components/Satellite';
import { shallow } from 'enzyme'
import { SATELLITES } from '../../constants';

describe('Suit test - Satellite Component', () => {
  test('its defined', () => {

    const wrapper =  shallow(<Satellite onGetLocation={() => {}} onGetMessage={() =>{}} {...SATELLITES[0]} />)
    expect(wrapper.find('.satellite')).toBeTruthy();
  })
  
})
