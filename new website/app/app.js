// view button click

window.onload = () => {
  main();
};

function main() {
  const buttonView = document.querySelectorAll(".view-button");
  const cardBody = document.querySelectorAll(".card-body");

  // console.log(buttonView);

  buttonView.forEach((button) => {
    button.addEventListener("click", myFunction);

    function myFunction() {
      button.classList.toggle("open");
      button.parentNode.children[1].classList.toggle("open");

      setTimeout(() => {
        button.classList.remove("open");
        button.parentNode.children[1].classList.remove("open");
      }, 3000);
    }
  });
}

// const buttons = document.querySelectorAll('.card-button');

// buttons.forEach(button => {
//   button.addEventListener('click', function() {
//     const card = button.closest('.card');

//     if (card.classList.contains('card-1')) {
//       // Action for card 1
//       console.log('Card 1 button clicked');
//     } else if (card.classList.contains('card-2')) {
//       // Action for card 2
//       console.log('Card 2 button clicked');
//     }
//   });
// });
