import { describe, expect, it } from "vitest";
import { chunk, flatten, unique } from "../src/arrayUtils";

describe("array utilities", () => {
	describe("unique", () => {
		it("removes duplicates", () => {
			expect(unique([1, 2, 2, 3])).toEqual([1, 2, 3]);
		});
	});

	describe("flatten", () => {
		it("flattens nested arrays", () => {
			expect(flatten([1, [2, [3, 4]], 5])).toEqual([1, 2, 3, 4, 5]);
		});
	});

	describe("chunk", () => {
		it("splits array into chunks", () => {
			expect(chunk([1, 2, 3, 4], 2)).toEqual([
				[1, 2],
				[3, 4],
			]);
		});
	});
});
