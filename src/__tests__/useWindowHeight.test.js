import useWindowHeight from "../hooks/useWindowHeight";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useWindowHeight", () => {
  const { result } = renderHook(() => useWindowHeight());
  let height = result.current;

  it("does not return null values", () => {
    expect(height).not.toBeNull();
  });

  it("to be a number value", () => {
    expect(height).toEqual(expect.any(Number));
  });

  it("initially matches window height", () => {
    expect(height).toBe(window.innerHeight);
  });

  // TODO simulate window resize
  // it("returns new value on window resize", () => {});
});
