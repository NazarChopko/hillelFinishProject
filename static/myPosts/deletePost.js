const getAllDeleteBtn = document.querySelectorAll('.deletePost');

if (getAllDeleteBtn) {
  getAllDeleteBtn.forEach((button) => {
    button.addEventListener('click', async (e) => {
      const postId = e.target.id;
      try {
        await fetch(`/api/posts/${postId}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json; charset=utf-8' }
        });
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    });
  });
}
