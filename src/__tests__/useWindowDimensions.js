import useWindowDimensions from "../hooks/useWindowDimensions";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useWindowDimensions", () => {
  it("does not return null values", () => {
    const { result } = renderHook(() => useWindowDimensions());
    expect(result).toBeTruthy();
  });
});
