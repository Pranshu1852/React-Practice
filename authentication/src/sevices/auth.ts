const testUser={
    id: 1,
    email: "test@gmail.com",
    role: "admin"
}

export type User=typeof testUser;

export async function getUser() {
    await new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });

    const authToken=generateAuthToken();

    return [200, { authToken, user: testUser}] as const;
}

export async function login() {
    await new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });

    const authToken=generateAuthToken();

    return [200, { authToken, user: testUser}] as const;
}

function generateAuthToken() {
    return Math.random().toString(36).substring(2);
}