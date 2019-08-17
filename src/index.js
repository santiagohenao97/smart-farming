import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


import $ from 'jquery';


//Creamos un nuevo componente que encapsule todo que vamos a llamar app
import App from './Components/App'


const container = document.getElementById('app');

ReactDOM.render(<App/> , container);

$(document).ready(function(){
    $('.pass_show').append('<span class="ptxt"><i class="fas fa-eye"></i></span>');  
    });
$(document).on('click','.pass_show .ptxt', function(){ 
    
     
    
    $(this).prev().attr('type', function(index, attr){return attr == 'password' ? 'text' : 'password'; }); 
    
    }); 
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
    });
