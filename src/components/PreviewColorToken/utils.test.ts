import { lightTheme } from "../../theme/theme";
import { getPrimitiveName } from "./utils";

describe("getPrimitiveName", () => {
  it("returns primitive key for core theme colors", () => {
    expect(getPrimitiveName("background", lightTheme)).toBe("gray200");
  });
});
