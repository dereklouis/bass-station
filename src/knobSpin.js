const knobSpin = (e, rotation, setRotation) => {
  if (e) {
    let clientStart = null;

    clientStart = e.clientX;
    const appContainer = document.getElementById('appContainer');
    appContainer.style.cursor = 'grabbing';
    document.addEventListener('mousemove', function (e) {
      let amountToMove = (e.clientX - clientStart) * 2;
      let moveDifference = rotation + amountToMove;
      if (
        clientStart !== null &&
        moveDifference <= 150 &&
        moveDifference >= -150
      ) {
        setRotation(moveDifference);
      }
    });
    document.addEventListener('mouseup', function () {
      clientStart = null;
      appContainer.style.cursor = 'default';
    });
  }
};

export default knobSpin;
