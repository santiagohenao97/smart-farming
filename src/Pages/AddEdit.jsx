import React, { Component } from 'react';

class AddEdit extends Component {
    state = {  }
    render() { 
        return ( 
            <>  
                <div className="container">
                    <i className="fas fa-info-circle fa-9x pb-4"></i>
                    <h2>En la fase inicial del proyecto no es posible agregar o editar los cultivos.</h2>
                    <h2>La opción estará disponible luego de tener información del desarrollo de la cosecha actual con la que 
                    fue registrado y se efectuó la validación y aprobación como beneficiario.</h2>
                    <h5><strong>Nota: </strong> La deshabilitación temporal es con el objetivo de tener información fiable
                    del comportamiento de su cultivo y desarrollar las mejores estrategias para el desarrollo del mismo 
                    Esperamos y apreciamos su comprensión.</h5>
                </div>

            
            </>

         );
    }
}
 
export default AddEdit;