import useWindowHeight from "../hooks/useWindowHeight";
import { renderHook, act } from "@testing-library/react-hooks";
import useWindowDimensions from "../hooks/useWindowDimensions";

describe("useWindowHeight", () => {
  const { result } = renderHook(() => useWindowHeight());
  let height = result.current;

  it("does not return null values", () => {
    expect(height).not.toBeNull();
  });

  it("initially matches window height", () => {
    expect(height).toBe(window.innerHeight);
  });

  it("returns new value on window resize", () => {
    const values = { first: height, second: null };
    expect(values.first).toBe(window.innerHeight);
    // TODO simulate window resize
    // window.resizeTo(window.innerWidth, window.innerHeight - 200);
    Object.assign(values, { second: height });
    console.log(values);
  });
});
