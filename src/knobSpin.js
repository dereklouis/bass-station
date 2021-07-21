export const knobSpin = (e, rotation, setRotation) => {
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
};

export const knobSpinNotch = (e, rotation, setRotation, notches) => {
  const notchKey = {
    4: 15,
    8: 135,
  };
  let clientStart = null;

  clientStart = e.clientX;
  const appContainer = document.getElementById('appContainer');
  appContainer.style.cursor = 'grabbing';
  document.addEventListener('mousemove', function (e) {
    let amountToMove = (e.clientX - clientStart) * 2;
    let moveDifference = rotation + amountToMove;
    if (
      clientStart !== null &&
      moveDifference <= notchKey[notches] &&
      moveDifference >= -90
    ) {
      let notchedMovement = Math.floor(moveDifference / 30) * 30;
      setRotation(notchedMovement);
    }
  });
  document.addEventListener('mouseup', function () {
    clientStart = null;
    appContainer.style.cursor = 'default';
  });
};
