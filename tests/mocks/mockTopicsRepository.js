// A hand-written Mock Object standing in for the Firestore-backed topics
// repository, over a plain in-memory array, so topicActions.js can be tested
// without a live database.

export function createMockTopicsRepository(initialTopics = []) {
    let topics = [...initialTopics];

    return {
        async getTopics() {
            return [...topics];
        },

        async addTopic(name) {
            topics.push(name);
        },

        async removeTopic(name) {
            topics = topics.filter((topic) => topic !== name);
        }
    };
}
