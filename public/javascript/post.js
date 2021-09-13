// function to create post

// function to login to page

async function postForm(event) {
    event.preventDefault();
    const title = document.querySelector("#title").value
    const content = document.querySelector("#content").value

        const response = await fetch('/api/users/login', {
            method:"post",
            body: JSON.stringify({
                title,
                content
            })
        })
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }

document.querySelector('.postBody').addEventListener('submit', loginForm);