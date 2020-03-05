import useWindowWidth from "../hooks/useWindowWidth";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useWindowWidth", () => {
  it("does not return null values", () => {
    const { result } = renderHook(() => useWindowWidth());
    expect(result).toBeTruthy();
  });
});
