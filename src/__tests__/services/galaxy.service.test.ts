import { GalaxyService } from "../../services";

jest.mock('../../utils/Http.util.ts', () => ({ PostRequest: jest.fn() })); 
describe('Suit test Galaxyservice', () => {
  test('its defined', () => {
    expect(GalaxyService).toBeDefined();
  })

  test('getTopSecret get async Data from service', async() => {
    const mockData = {
      satellites: [{
          name: 'kenobi',
          distance: 100.0,
          message: ["este", "", "", "mensaje", ""]
        },
        {
        name: "skywalker",
        distance: 115.5,
        message: ["", "es", "", "", "secreto"]
        },
        {
        name: "sato",
        distance: 142.7,
        message: ["este", "", "un", "", ""]
        }
        ]
    };
    const result = await GalaxyService.getTopSecret(mockData);
    expect(result).toBeFalsy();
  })
  
  
})
