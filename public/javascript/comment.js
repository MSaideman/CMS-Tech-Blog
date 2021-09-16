// function to add comment

async function commentForm(event) {
    event.preventDefault();
    const content = document.querySelector('textarea[name="content"]').value.trim();
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    if (content) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            post_id: post_id,
            content: content
          }),
        });
        console.log(content);
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
}
document.querySelector('.comment-form').addEventListener('submit', commentForm);