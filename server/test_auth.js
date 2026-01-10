
const registerUrl = 'http://localhost:3000/api/register';
const loginUrl = 'http://localhost:3000/api/login';

const user = {
    firstName: "Test",
    lastName: "Auth",
    email: `t${Date.now()}@e.com`,
    phone: `07${Date.now().toString().slice(-8)}`,
    idNumber: Date.now().toString().slice(-8),
    county: "Nairobi City",
    password: "password123"
};

async function test() {
    try {
        const regRes = await fetch(registerUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
        console.log("Reg Status:", regRes.status);

        const loginRes = await fetch(loginUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email, password: "password123" })
        });
        console.log("Login Status:", loginRes.status);
    } catch (e) {
        console.error("Error:", e);
    }
}

test();
