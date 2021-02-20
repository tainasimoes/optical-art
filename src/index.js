import $ from 'jquery';
import './scss/style.scss';

// document.addEventListener('mousemove', function(e) {
//   let body = document.querySelector('body');
//   let circle = document.getElementById('mouse');
//   let left = e.offsetX;
//   let top = e.offsetY;
//   circle.style.left = left + 'px';
//   circle.style.top = top + 'px';
// });

// let circle = document.getElementById('mouse');
// const onMouseMove = (e) =>{
//   circle.style.left = e.pageX + 'px';
//   circle.style.top = e.pageY + 'px';
// }
// document.addEventListener('mousemove', onMouseMove);


$('.openModal').click(function(){
  $('#modal').addClass('active');
  // $('#mouse').css('background-color', 'rgba(0, 0, 0, .8)')
})
$('.closeModal').click(function(){
  $('#modal').removeClass('active');
  // $('#mouse').css('background-color', 'rgba(255, 255, 255, .8)')
})

// Experiments
// $('.openExperiments').click(function(){
//   $('#experiments').addClass('active');
//   // $('#mouse').css('background-color', 'rgba(0, 0, 0, .8)')
// })
// $('.closeExperiments').click(function(){
//   $('#experiments').removeClass('active');
//   // $('#mouse').css('background-color', 'rgba(255, 255, 255, .8)')
// })

// Voltar
// $('.thumb').click(function(){
//   $(this).parent().find('.modal').addClass('active');
// })
// $('.back').click(function(){
//   $('.modal').removeClass('active');
// })

