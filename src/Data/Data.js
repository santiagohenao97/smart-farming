
import tempIcon from '../Components/HomeComponent/img/temperature.png'
import lumIcon from '../Components/HomeComponent/img/bulb.png'
import cropIcon from '../Components/HomeComponent/img/sprinkler.png'
import nutriIcon from '../Components/HomeComponent/img/seed-bag.png'
import pestIcon from '../Components/HomeComponent/img/leaf.png'
import planIcon from '../Components/HomeComponent/img/analytics.png'

const DataBase = {

    "Temp":{
        "img": tempIcon,
        "seccion": "Temperatura",
        "estado": "Bueno",
        "variable": "La temperatura",
        "valor":"24°C",
        "accion":"No es necesaria ninguna acción"
    },
    
    "TempChart":{
        "horas":['7:00am','8:00am','9:00am','10:00am','11:00am','12:00m','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'],
        "dataname1":"Temperatura",
        "data1":[22,24,23,25,22,25,22,24,23,24,25,22,21,23],
        "background1":'rgba(0, 150, 136, 0.2)',
        "dataname2":"Temperatura Ambiente",
        "data2":[31,30,32,32,30,35,31,32,35,33,32,30,28,27],
        "background2":'rgba(100, 10, 13, 0.2)',
        
    },

    "Lum":{
        "img": lumIcon,
        "seccion": "Luminosidad",
        "estado": "Bueno",
        "variable": "El fotoperiodo",
        "valor":"6 horas",
        "accion":"Encienda el sistema de iluminación"
    },
    
    "LumChart":{
        "horas":['7:00am','8:00am','9:00am','10:00am','11:00am','12:00m','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'],
        "dataname1":"Luminosidad",
        "data1":[22,24,23,25,22,25,22,24,23,24,25,22,21,23],
        "background1":'rgba(0, 150, 136, 0.2)',
        "dataname2":"Luminosidad Teórica",
        "data2":[31,30,32,32,30,35,31,32,35,33,32,30,28,27],
        "background2":'rgba(100, 10, 13, 0.2)',
        
    },
    "Crop":{
        "img": cropIcon,
        "seccion": "Riego",
        "estado": "Bueno",
        "variable": "La frecuencia de riego",
        "valor":"",
        "accion":"No es necesaria ninguna acción"
    },
    
    "CropChart":{
        "horas":['7:00am','8:00am','9:00am','10:00am','11:00am','12:00m','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'],
        "dataname1":"Humedad",
        "data1":[22,24,23,25,22,25,22,24,23,24,25,22,21,23],
        "background1":'rgba(0, 150, 136, 0.2)',
        "dataname2":"Humedad Teórica",
        "data2":[31,30,32,32,30,35,31,32,35,33,32,30,28,27],
        "background2":'rgba(100, 10, 13, 0.2)',
        
    },
    "Nutri":{
        "img": nutriIcon,
        "seccion": "Nutrientes",
        "estado": "Bueno",
        "variable": "Los Nutientes",
        "valor":"",
        "accion":"No es necesaria ninguna acción"
    },
    
    "NutriChart":{
        "horas":['7:00am','8:00am','9:00am','10:00am','11:00am','12:00m','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'],
        "dataname1":"Nutrientes",
        "data1":[22,24,23,25,22,25,22,24,23,24,25,22,21,23],
        "background1":'rgba(0, 150, 136, 0.2)',
        "dataname2":"Nutientes Teórico",
        "data2":[31,30,32,32,30,35,31,32,35,33,32,30,28,27],
        "background2":'rgba(100, 10, 13, 0.2)',
        
    },

    "Pest":{
        "img": pestIcon,
        "seccion": "Control de Plagas",
        "estado": "Bueno",
        "variable": "El nivel de pesticida",
        "valor":"",
        "accion":"No es necesaria ninguna acción"
    },
    
    "PestChart":{
        "horas":['7:00am','8:00am','9:00am','10:00am','11:00am','12:00m','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'],
        "dataname1":"Pesticida",
        "data1":[22,24,23,25,22,25,22,24,23,24,25,22,21,23],
        "background1":'rgba(0, 150, 136, 0.2)',
        "dataname2":"Niveles saludables",
        "data2":[31,30,32,32,30,35,31,32,35,33,32,30,28,27],
        "background2":'rgba(100, 10, 13, 0.2)',
        
    },

    


}

export default DataBase;