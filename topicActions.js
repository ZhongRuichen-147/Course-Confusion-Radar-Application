// Orchestration for the course-topic admin actions (add, remove). Each
// function takes a repository as its first argument instead of importing
// Firestore directly, matching reportActions.js, so it can be unit-tested
// with a mock repository (tests/mocks/mockTopicsRepository.js).

import { addTopic, removeTopic } from "./logic.js";

export async function addTopicAction(repository, name) {
    const currentTopics = await repository.getTopics();
    const result = addTopic(currentTopics, name);
    if (result.valid) {
        const addedName = result.topics[result.topics.length - 1];
        await repository.addTopic(addedName);
    }
    return result;
}

export async function removeTopicAction(repository, name) {
    await repository.removeTopic(name);
}
