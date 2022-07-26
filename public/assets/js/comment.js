const createNewComment = async (event) => {
    event.preventDefault();
  
    const blog_id = event.target.getAttribute('data-id');
    const body = document.querySelector('#comment-body').value.trim();
  
    if (body) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ blog_id, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      document.location.reload();
    }
  };
  
  
  document.getElementById('comment_form').addEventListener('submit', createNewComment);