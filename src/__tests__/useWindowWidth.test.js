import useWindowWidth from "../hooks/useWindowWidth";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useWindowWidth", () => {
  const { result } = renderHook(() => useWindowWidth());
  let width = result.current;

  it("does not return null values", () => {
    expect(width).not.toBeNull();
  });

  it("to be a number value", () => {
    expect(width).toEqual(expect.any(Number));
  });

  it("initially matches window width", () => {
    expect(width).toBe(window.innerWidth);
  });

  // TODO simulate window resize
  // it("returns new value on window resize", () => {});
});
