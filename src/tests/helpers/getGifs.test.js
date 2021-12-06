import { getGifs } from '../../helpers/getGifs';

describe('getGifs', () => {
  test('should get 10 gifs when getGifs recieve a category', async () => {
    const gifs = await getGifs('Dexter');

    expect(gifs.length).toBe(10);
  });

  test('should get 0 gifs when getGifs does not recieve a category', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });  
});