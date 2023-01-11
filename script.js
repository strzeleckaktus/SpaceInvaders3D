const cam = document.getElementById('camera');

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w': {
      console.log('w');
      cam.position = '15 15 15';
      break;
    }
    case 's': {
      console.log('s');
      break;
    }
    case 'a': {
      console.log('a');
      break;
    }
    case 'd': {
      console.log('d');
      break;
    }
  }
});
