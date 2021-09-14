// function to delete post 
async function deleteForm(event) {
    event.preventDefault();
        
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          id: id
        }),
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    
  }

document.querySelector('#delete-btn').addEventListener('click', deleteForm);