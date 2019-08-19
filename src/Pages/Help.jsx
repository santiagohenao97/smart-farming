import React, { Component } from 'react';
import './Styles/HelpStyle.css'

class Help extends Component {
    state = {  }
    render() { 
        return ( <>

<div className="container">
    <div className="row">
        <div className="col-lg-4">
            <div className="nav nav-pills faq-nav" id="faq-tabs" role="tablist" aria-orientation="vertical">
                <a href="#tab1" className="nav-link active" data-toggle="pill" role="tab" aria-controls="tab1" aria-selected="true">
                    <i className="mdi mdi-help-circle"></i> Preguntas Frecuentes
                </a>
                <a href="#tab2" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab2" aria-selected="false">
                    <i className="mdi mdi-account"></i> Mi plan
                </a>
                <a href="#tab3" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab3" aria-selected="false">
                    <i className="mdi mdi-account-settings"></i> Mi cuenta
                </a>
                <a href="#tab4" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab4" aria-selected="false">
                    <i className="mdi mdi-heart"></i> Mi cultivo
                </a>
                <a href="#tab5" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab5" aria-selected="false">
                    <i className="mdi mdi-coin"></i> Mas info
                </a>
                
            </div>
        </div>
        <div className="col-lg-8">
            <div className="tab-content" id="faq-tab-content">
                <div className="tab-pane show active" id="tab1" role="tabpanel" aria-labelledby="tab1">
                    <div className="accordion" id="accordion-tab-1">
                        <div className="card">
                            <div className="card-header" id="accordion-tab-1-heading-1">
                                <h5>
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-1" aria-expanded="false" aria-controls="accordion-tab-1-content-1">¿La aplicación tiene algún costo?</button>
                                </h5>
                            </div>
                            <div className="collapse show" id="accordion-tab-1-content-1" aria-labelledby="accordion-tab-1-heading-1" data-parent="#accordion-tab-1">
                                <div className="card-body">
                                    <p>Por lo pronto no, esperamos poder expandir nuestros serivicios de manera gratuita a todas las comunidades posibles.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="accordion-tab-1-heading-2">
                                <h5>
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-2" aria-expanded="false" aria-controls="accordion-tab-1-content-2">¿Quién asume la instalación de los equipos de medición?</button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-1-content-2" aria-labelledby="accordion-tab-1-heading-2" data-parent="#accordion-tab-1">
                                <div className="card-body">
                                    <p>Si estás inscrito en el plan de desarrollo sostenible en los campos de Sucre, el departamento es el encargado de suministrar los equipos</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="accordion-tab-1-heading-3">
                                <h5>
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-3" aria-expanded="false" aria-controls="accordion-tab-1-content-3">¿Cómo adquiero los servicios si no soy beneficiario del programa estatal?</button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-1-content-3" aria-labelledby="accordion-tab-1-heading-3" data-parent="#accordion-tab-1">
                                <div className="card-body">
                                    <p>Si no hace parte de los beneficiarios, puede ponerse en contacto con nosotros para realizar su cotización.</p>
                                    <p><strong>Más información </strong>Dirijase a la sección Mas información y contáctenos</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="accordion-tab-1-heading-4">
                                <h5>
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-4" aria-expanded="false" aria-controls="accordion-tab-1-content-4">¿Cómo realizar mantenimiento a los equipos?</button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-1-content-4" aria-labelledby="accordion-tab-1-heading-4" data-parent="#accordion-tab-1">
                                <div className="card-body">
                                    <p>El mantenimiento debe ser realizado por personal calificado. Por su parte, procure que el entorno, y el general, los elementos se encuentren limpios.
                                        Pera esto puede hacer uso de un trapo limpio y un poco humedecido sobre la superficie de los dispositivos.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane" id="tab2" role="tabpanel" aria-labelledby="tab2">
                    <div className="accordion" id="accordion-tab-2">
                        <div className="card">
                            <div className="card-header" id="accordion-tab-2-heading-1">
                                <h5>
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-1" aria-expanded="false" aria-controls="accordion-tab-2-content-1">¿Por qué es necesario suministrar información personal</button>
                                </h5>
                            </div>
                            <div className="collapse show" id="accordion-tab-2-content-1" aria-labelledby="accordion-tab-2-heading-1" data-parent="#accordion-tab-2">
                                <div className="card-body">
                                    <p>Al estar incluido en el plan de desarrollo del programa, es necesario tener información básica para ponernos en contacto con usted.
                                        y realizar un seguimiento procurando el éxito en su proceso.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="accordion-tab-2-heading-2">
                                <h5>
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-2" aria-expanded="false" aria-controls="accordion-tab-2-content-2">¿Por qué debo dar información de mi cultivo?</button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-2-content-2" aria-labelledby="accordion-tab-2-heading-2" data-parent="#accordion-tab-2">
                                <div className="card-body">
                                    <p>La información de su cultivo se obtiene de manera anónima y sirve como elemento fundamental en el plan de mejoramiento
                                        del análisis de productividad desarrollado para los beneficiarios.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="accordion-tab-2-heading-3">
                                <h5>
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-3" aria-expanded="false" aria-controls="accordion-tab-2-content-3">Quiero modificar la información personal o del cultivo, ¿Qué hacer?</button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-2-content-3" aria-labelledby="accordion-tab-2-heading-3" data-parent="#accordion-tab-2">
                                <div className="card-body">
                                    <p>El perfil fue registrado de manera directa al ingresar a nuestro plan. Cualquier cambio debe ser comunicado directamente con
                                    los líderes del proyecto para ser evaluado
                                    </p>
                                    
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="tab-pane" id="tab3" role="tabpanel" aria-labelledby="tab3">
                    <div className="accordion" id="accordion-tab-3">
                        <div className="card">
                            <div className="card-header" id="accordion-tab-3-heading-1">
                                <h5>
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-3-content-1" aria-expanded="false" aria-controls="accordion-tab-3-content-1">Quiero editar mi perfil, ¿Qué hacer?</button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-3-content-1" aria-labelledby="accordion-tab-2-heading-3" data-parent="#accordion-tab-2">
                                <div className="card-body">
                                    <p>En el momento de la suscripción al servicio se hace la validación de los elementos generales del cultivo y del encargado del mismo.
                                        si desea realizar modificaciones en el perfil como cambiar contraseña, dirijase a Mi cuenta y posteriormente Cambiar Contraseña
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="card">
                            <div className="card-header" id="accordion-tab-3-heading-4">
                                <h5>
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-3-content-4" aria-expanded="false" aria-controls="accordion-tab-3-content-4">Quiero eliminar mi cuenta</button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-3-content-4" aria-labelledby="accordion-tab-3-heading-4" data-parent="#accordion-tab-3">
                                <div className="card-body">
                                    <p>Al ser un proyecto estatal, de cual se realizó el respectivo contrato, debe enviar un correo a santiago.henao@hotmail.
                                        Para resolver su solicitud
                                    </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane" id="tab4" role="tabpanel" aria-labelledby="tab4">
                    <div className="accordion" id="accordion-tab-4">
                        <div className="card">
                            <div className="card-header" id="accordion-tab-4-heading-1">
                                <h5>
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-4-content-1" aria-expanded="false" aria-controls="accordion-tab-4-content-1">¿Los datos son reales?</button>
                                </h5>
                            </div>
                            <div className="collapse show" id="accordion-tab-4-content-1" aria-labelledby="accordion-tab-4-heading-1" data-parent="#accordion-tab-4">
                                <div className="card-body">
                                    <p>Si, la obtención de los datos se hace de la mejor manera de hacerlo para efectuar modificaciones o continuar con el proceso </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="accordion-tab-4-heading-2">
                                <h5>
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-4-content-2" aria-expanded="false" aria-controls="accordion-tab-4-content-2">¿Como mejorar mi Cultivo?</button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-4-content-2" aria-labelledby="accordion-tab-4-heading-2" data-parent="#accordion-tab-4">
                                <div className="card-body">
                                    <p>Cumpla con las actividades propuestas por la aplicación. 
                                        Si desea más conocimientos, no dude leer acerca de este tema
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="accordion-tab-4-heading-3">
                                <h5>
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-4-content-3" aria-expanded="false" aria-controls="accordion-tab-4-content-3">No aparece ningun sensor conectado, ¿Qué hacer?</button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-4-content-3" aria-labelledby="accordion-tab-4-heading-3" data-parent="#accordion-tab-4">
                                <div className="card-body">
                                    <p>Si tiene problemas para conectarse con el hardware, por favor pongase en contacto con nosotros para asignar una visita técnica</p>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="tab-pane" id="tab5" role="tabpanel" aria-labelledby="tab5">
                    <div className="accordion" id="accordion-tab-5">
                        <div className="card">
                            <div className="card-header" id="accordion-tab-5-heading-1">
                                <h5>
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-5-content-1" aria-expanded="false" aria-controls="accordion-tab-5-content-1">¿Quienes somos?</button>
                                </h5>
                            </div>
                            <div className="collapse show" id="accordion-tab-5-content-1" aria-labelledby="accordion-tab-5-heading-1" data-parent="#accordion-tab-5">
                                <div className="card-body">
                                    <p>Somos un proyecto social, que de la mano de Colciencias y el PAED busca favorecer al sector agrícola colombiano.</p>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div className="card">
                            <div className="card-header" id="accordion-tab-5-heading-3">
                                <h5>
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-5-content-3" aria-expanded="false" aria-controls="accordion-tab-5-content-3">¿Que otros desarrollos he ejecutado? </button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-5-content-3" aria-labelledby="accordion-tab-5-heading-3" data-parent="#accordion-tab-5">
                                <div className="card-body">
                                    <p>Puede visitar el portafolio para ver información mas detallada del lider de desarrollo: https://santiagohenao.netlify.com/</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="accordion-tab-5-heading-2">
                                <h5>
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-5-content-2" aria-expanded="false" aria-controls="accordion-tab-5-content-2">Contacto</button>
                                </h5>
                            </div>
                            <div className="collapse" id="accordion-tab-5-content-2" aria-labelledby="accordion-tab-5-heading-2" data-parent="#accordion-tab-5">
                                <div className="card-body">
                                    <p>Tel: 3128867880 o santiago.henao@hotmail.com</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                        
                    
                
            </div>
        </div>
    </div>
</div>
        </> );
    }
}
 
export default Help;