const getAllInputs = document.querySelectorAll('.textarea');

getAllInputs.forEach((input) => {
  const postsSubmitBtn = document.querySelector(`button[id="${input.id}"]`);

  let commentText = '';
  const postId = input.id;

  input.addEventListener('input', (e) => {
    commentText = e.target.value;
  });

  postsSubmitBtn.addEventListener('click', async (e) => {
    const res = await fetch('/api/', {
      method: 'POST',
      body: JSON.stringify({ text: commentText, postId }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
    window.location.reload();
  });
});
