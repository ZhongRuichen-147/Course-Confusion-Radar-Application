// A hand-written Mock Object standing in for a real user/credential store,
// used to test auth.js's login() without a real authentication backend.

export function createMockUserRepository(users = []) {
    return {
        async findByUsername(username) {
            return users.find((user) => user.username === username) || null;
        }
    };
}
