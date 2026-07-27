// Automated tests for auth.js's login(), using a Mock Object
// (tests/mocks/mockUserRepository.js) in place of a real user store.

import { test } from "node:test";
import assert from "node:assert/strict";
import { login } from "../auth.js";
import { createMockUserRepository } from "./mocks/mockUserRepository.js";

test("login succeeds with a matching username and password", async () => {
    const userRepository = createMockUserRepository([
        { username: "lecturer1", password: "correct-password" }
    ]);
    const result = await login(userRepository, "lecturer1", "correct-password");
    assert.equal(result.success, true);
    assert.equal(result.message, "Welcome, lecturer1.");
});

test("login fails for an unknown username", async () => {
    const userRepository = createMockUserRepository([]);
    const result = await login(userRepository, "nobody", "anything");
    assert.equal(result.success, false);
    assert.equal(result.message, "Unknown username.");
});

test("login fails for an incorrect password", async () => {
    const userRepository = createMockUserRepository([
        { username: "lecturer1", password: "correct-password" }
    ]);
    const result = await login(userRepository, "lecturer1", "wrong-password");
    assert.equal(result.success, false);
    assert.equal(result.message, "Incorrect password.");
});
