
//   document.addEventListener('DOMContentLoaded', () => {

//     const mediaFiles = document.querySelectorAll('img, video');
//     let i = 0

//     Array.from(mediaFiles).forEach((file, index) => {
//         file.onload = () => {
//             i++

//             percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1)

//             if(i === mediaFiles.length) {
//                 preloader.remove();
//                 percents.innerHTML = 100
//             }
//         }
//     })

// })

document.body.onload = function() {
  setTimeout(function() {
  var preloader = document.getElementById("preloader");
  preloader.remove();
}, 300);
}
