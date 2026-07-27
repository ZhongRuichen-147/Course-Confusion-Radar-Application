// Automated tests for topicActions.js using a Mock Object
// (tests/mocks/mockTopicsRepository.js) in place of Firestore.

import { test } from "node:test";
import assert from "node:assert/strict";
import { addTopicAction, removeTopicAction } from "../topicActions.js";
import { createMockTopicsRepository } from "./mocks/mockTopicsRepository.js";

test("addTopicAction adds a valid new topic to the repository (AC9.2)", async () => {
    const repository = createMockTopicsRepository(["Testing"]);
    const result = await addTopicAction(repository, "GitHub");
    assert.equal(result.valid, true);
    assert.deepEqual(await repository.getTopics(), ["Testing", "GitHub"]);
});

test("addTopicAction rejects a duplicate topic without writing to the repository (AC9.3)", async () => {
    const repository = createMockTopicsRepository(["Testing"]);
    const result = await addTopicAction(repository, "testing");
    assert.equal(result.valid, false);
    assert.deepEqual(await repository.getTopics(), ["Testing"]);
});

test("addTopicAction rejects an empty name without writing to the repository (AC9.4)", async () => {
    const repository = createMockTopicsRepository(["Testing"]);
    const result = await addTopicAction(repository, "   ");
    assert.equal(result.valid, false);
    assert.deepEqual(await repository.getTopics(), ["Testing"]);
});

test("addTopicAction stores the trimmed name (AC9.5)", async () => {
    const repository = createMockTopicsRepository([]);
    await addTopicAction(repository, "  GitHub  ");
    assert.deepEqual(await repository.getTopics(), ["GitHub"]);
});

test("removeTopicAction removes an existing topic from the repository (AC9.6)", async () => {
    const repository = createMockTopicsRepository(["Testing", "GitHub"]);
    await removeTopicAction(repository, "GitHub");
    assert.deepEqual(await repository.getTopics(), ["Testing"]);
});

test("removeTopicAction leaves the repository unchanged when the topic is not found (AC9.7)", async () => {
    const repository = createMockTopicsRepository(["Testing"]);
    await removeTopicAction(repository, "GitHub");
    assert.deepEqual(await repository.getTopics(), ["Testing"]);
});
