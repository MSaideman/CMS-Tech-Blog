// function to create post

async function postForm(event) {
    event.preventDefault();
    const title = document.querySelector("#title").value
    const content = document.querySelector("#content").value

        const response = await fetch('/api/posts/', {
            method:"post",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                content: content
            })
        })
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }

document.querySelector('.postBody').addEventListener('submit', postForm);