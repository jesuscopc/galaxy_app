import { renderHook } from '@testing-library/react-hooks';
import { SATELLITES } from '../../constants';
import UseGalaxyApiHook from '../../hooks/UseGalaxyApiHook';

describe('Suit test UseGalaxyApiHook hook', () => {
  test('should no call satelliteAPi', () => {
    const {result} = renderHook(() => UseGalaxyApiHook({satellite: SATELLITES[0].name}));

    expect(result.current.data).toEqual({ message: [], position: { x:0, y:0 } });
    expect(result.current.error).toBe(null);
    expect(result.current.loading).toBeTruthy();
  });

  test('should no call spaceCraftApi CALL', () => {
    const {result} = renderHook(() => UseGalaxyApiHook({callSpacecraft: true}));

    expect(result.current.data).toEqual({ message: [], position: { x:0, y:0 } });
    expect(result.current.error).toBe(null);
    expect(result.current.loading).toBeTruthy();
  });
  
});