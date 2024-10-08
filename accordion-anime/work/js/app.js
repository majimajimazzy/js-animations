const move = document.querySelectorAll('.list-item');
move.forEach(moving => {
  moving.addEventListener('click', () => {
      const content = moving.querySelector('.list-content');
      content.classList.toggle('active');
      if(content.classList.contains('active')){
        content.style.height = content.scrollHeight + 'px';
      } else {
        content.style.height = '0px';
      }
  });
});

