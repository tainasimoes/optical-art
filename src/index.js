import $ from 'jquery';
import './scss/style.scss';

$('.openModal').click(function(){
  $('#modal').addClass('active');
})
$('.closeModal').click(function(){
  $('#modal').removeClass('active');
})