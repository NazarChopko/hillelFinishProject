const getAllDeleteBtn = document.querySelectorAll('.deleteUser');

if (getAllDeleteBtn) {
  getAllDeleteBtn.forEach((button) => {
    button.addEventListener('click', async (e) => {
      const userId = e.target.id;
      try {
        await fetch(`/api/admin/${userId}`, {
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
