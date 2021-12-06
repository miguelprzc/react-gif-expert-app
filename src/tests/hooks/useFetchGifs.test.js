import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'

describe('useFetchGifs', () => {
  test('should return the initial state', async() => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Dexter'));
    const {data, loading} = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('should return 10 gifs inside date and loading as false', async() => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Dexter'));
    await waitForNextUpdate();

    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });
});
