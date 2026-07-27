// A small, self-contained example of the Mock Object pattern applied to a
// login process, as suggested by the Practical 8 task sheet.
//
// This module is NOT wired into the live application. The app is
// intentionally anonymous and login-free by design (see README section 5:
// "Student identity will not be required"), so there is no real user store
// to authenticate against. login() exists to demonstrate testing code that
// depends on an external credential store the same way reportActions.js is
// tested against a mock in place of Firestore: userRepository is injected,
// so a test can supply an in-memory fake (tests/mocks/mockUserRepository.js)
// instead of a real database.

export async function login(userRepository, username, password) {
    const user = await userRepository.findByUsername(username);
    if (!user) {
        return { success: false, message: "Unknown username." };
    }
    if (user.password !== password) {
        return { success: false, message: "Incorrect password." };
    }
    return { success: true, message: `Welcome, ${user.username}.` };
}
