const inputs = Array.from(document.querySelectorAll('.controls input'));

// inputs.forEach((input) =>
//   input.addEventListener('change', function (e) {
//     const suffix = this.dataset.sizing || '';
//     document.documentElement.style.setProperty(
//       `--${this.name}`,
//       `${this.value + suffix}`
//     );
//   })
// );

inputs.forEach((input) =>
  input.addEventListener('mousemove', function (e) {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(
      `--${this.name}`,
      `${this.value + suffix}`
    );
  })
);
