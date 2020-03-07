import useWindowDimensions from "../hooks/useWindowDimensions";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useWindowDimensions", () => {
  const { result } = renderHook(() => useWindowDimensions());
  const { height, width } = result.current;

  it("is object with height/width properties", () => {
    expect(result.current).toHaveProperty("height");
    expect(result.current).toHaveProperty("width");
  });

  it("does not return null values", () => {
    expect(height).not.toBeNull();
    expect(width).not.toBeNull();
  });

  it("contains number values", () => {
    expect(height).toEqual(expect.any(Number));
    expect(width).toEqual(expect.any(Number));
  });

  it("matches height/width values", () => {
    expect(height).toBe(window.innerHeight);
    expect(width).toBe(window.innerWidth);
  });

  // TODO simulate window resize
  // it("returns new value on window resize", () => {});
});
