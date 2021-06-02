import HttpUtil from "../../utils/Http.util";

describe('Suit test Http utils', () => {
  test('should be defined', () => {
    expect(HttpUtil).toBeDefined();
  });

  describe('Sui test PostRequest', () => {
    test('should be defined', () => {
      expect(HttpUtil.SendRequest).toBeDefined()
      const result = HttpUtil.PostRequest('topsecret_split/sato', []);
      expect(result).resolves;
    });
  })
  describe('Sui test SendRequest', () => {
    test('should be defined', () => {
      expect(HttpUtil.SendRequest).toBeDefined()
      const result = HttpUtil.SendRequest('topsecret_split/sato');
      expect(result).resolves;
    });
  })
  
});
