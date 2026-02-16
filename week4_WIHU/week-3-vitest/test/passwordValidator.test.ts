import { describe, expect, it } from "vitest";
import { validatePassword } from "../src/passwordValidator";

describe("validatePassword", () => {
	it("fails if password is too short", () => {
		const result = validatePassword("Ab1!");
		expect(result.valid).toBe(false);
		expect(result.errors).toContain(
			"Password must be at least 8 characters long",
		);
	});

	it("fails missing required character types", () => {
		const result = validatePassword("abcdefgh");
		expect(result.valid).toBe(false);
		expect(result.errors.length).toBeGreaterThan(0);
	});

	it("passes for a valid password", () => {
		const result = validatePassword("Strong1!");
		expect(result.valid).toBe(true);
		expect(result.errors).toHaveLength(0);
	});
});
