import useWindowWidth from "../hooks/useWindowWidth";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useWindowWidth", () => {
  const { result } = renderHook(() => useWindowWidth());
  let width = result.current;

  it("does not return null values", () => {
    expect(width).not.toBeNull();
  });

  it("initially matches window width", () => {
    expect(width).toBe(window.innerWidth);
  });

  it("returns new value on window resize", () => {
    const values = { first: width, second: null };
    expect(values.first).toBe(window.innerWidth);
    // TODO simulate window resize
    // window.resizeTo(window.innerWidth, window.innerWidth - 200);
    Object.assign(values, { second: width });
    console.log(values);
  });
});
