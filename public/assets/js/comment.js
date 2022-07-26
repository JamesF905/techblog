const createNewComment = async (event) => {
    alert("hi");
    event.preventDefault();
    const blog_id = document.getElementById('comment_now').getAttribute('data-id');
    alert(blog_id);
    const body = document.querySelector('#comment-body').value.trim();
    alert(body);
    if (body) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ blog_id, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to comment');
      }
    }
  };
  
  
  document.getElementById('comment_form').addEventListener('submit', createNewComment);