// function to sign up

async function signUpForm(event) {
    event.preventDefault();
    const username = document.querySelector("#username").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
 console.log(username, email, password)
    if (email && password) {
        const response = await fetch('/api/users/signup', {
            method:"post",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signUpBody').addEventListener('submit', signUpForm);