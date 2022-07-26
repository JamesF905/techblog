const editHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#edit-title').value.trim();
    const body = document.querySelector('#edit-body').value.trim();

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: {
            'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to edit blog');
      }
    }
  };

  document.querySelector('#edit_blog').addEventListener('submit', editHandler);