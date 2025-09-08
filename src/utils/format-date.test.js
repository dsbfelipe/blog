import { expect, test } from "vitest";
import formatDate from "./format-date";

(test("ISO date should be formatted as pt-BR"),
  () => {
    expect(formatDate("2025-08-29T00:00:00")).toBe("29/08/2025");
  });

(test("should return 'Invalid Date' if input is not a valid ISO date"),
  () => {
    expect(formatDate("not-a-valid-ISO-date").toBe("Invalid Date"));
  });
