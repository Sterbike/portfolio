document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('download_cv_button');
  const popup = document.getElementById('download_cv');

  if (!toggleButton || !popup) return;

  // Megnyitás gomb
  toggleButton.addEventListener('click', () => {
    popup.classList.remove('hidden');
  });

  // Bezárás ha a popupra kattintunk, de nem egy gombra
  popup.addEventListener('click', (event) => {
      popup.classList.add('hidden');
  });
});