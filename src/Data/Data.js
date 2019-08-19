
import tempIcon from '../Components/HomeComponent/img/temperature.png'
import lumIcon from '../Components/HomeComponent/img/bulb.png'
import cropIcon from '../Components/HomeComponent/img/sprinkler.png'
import nutriIcon from '../Components/HomeComponent/img/seed-bag.png'
import pestIcon from '../Components/HomeComponent/img/leaf.png'


const DataBase = {

    "Temp":{
        "img": tempIcon,
        "seccion": "Temperatura",
        "estado": "Bueno",
        "variable": "La temperatura",
        "valor":"24°C",
        "accion":"No es necesaria ninguna acción",
        "etapa":"Vegetativa"
    },
    
    "TempChart":{
        "horas":['7:00am','8:00am','9:00am','10:00am','11:00am','12:00m','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'],
        "dataname1":"Temperatura",
        "data1":[20,22,23,24,22,21,22,24,23,24,25,22,21,23],
        "background1":'rgba(0, 150, 136, 0.2)',
        "dataname2":"Temperatura Ambiente",
        "data2":[31,30,32,32,30,35,31,32,35,33,32,30,28,27],
        "background2":'rgba(100, 10, 13, 0.2)',
        "min":0,
        "max":50
        
    },

    "Lum":{
        "img": lumIcon,
        "seccion": "Luminosidad",
        "estado": "Bueno",
        "variable": "El fotoperiodo",
        "valor":"12 horas",
        "accion":"Encienda el sistema de iluminación",
        "etapa":"Vegetativa"
    },
    
    "LumChart":{
        "horas":['7:00am','8:00am','9:00am','10:00am','11:00am','12:00m','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'],
        "dataname1":"Luminosidad",
        "data1":[12000,12500,14000,15000,20000,22000,22000,24000,23222,19000,9000,1200,9000,7100],
        "background1":'rgba(0, 150, 136, 0.2)',
        "dataname2":"Luminosidad Mínima",
        "data2":[12000,12000,12000,12000,12000,12000,12000,12000,12000,12000,12000,12000,12000,12000,],
        "background2":'rgb(100, 10, 13, 0.2)',
        "min":0,
        "max":32000
        
    },
    "Crop":{
        "img": cropIcon,
        "seccion": "Riego",
        "estado": "Bueno",
        "variable": "La frecuencia de riego ",
        "valor":"5 min",
        "accion":"No es necesaria ninguna acción",
        "etapa":"Vegetativa"
        
    },
    
    "CropChart":{
        "horas":['7:00am','8:00am','9:00am','10:00am','11:00am','12:00m','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'],
        "dataname1":"Riegos",
        "data1":[1,2,3,4,5,7,9,10,12,12,13,13,13],
        "background1":'rgba(0, 150, 136, 0.2)',
        "dataname2":"Riegos necesarios",
        "data2":[15,15,15,15,15,15,15,15,15,15,15,15,15,],
        "background2":'rgba(100, 10, 13, 0.2)',
        "min":0,
        "max":20
        
    },
    "Nutri":{
        "img": nutriIcon,
        "seccion": "Nutrientes",
        "estado": "Bueno",
        "variable": "El nivel del tanque de nutrientes",
        "valor":"Alto",
        "accion":"No es necesaria ninguna acción",
        "etapa":"Vegetativa"
    },
    
    "NutriChart":{
        "horas":['7:00am','8:00am','9:00am','10:00am','11:00am','12:00m','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'],
        "dataname1":"PH",
        "data1":[7.2,6.9,7.1,7,6.8,6.5,6.8,6.8,6.8,6.8,7,7.3,7.2],
        "background1":'rgba(0, 150, 136, 0.2)',
        "dataname2":"PH ideal",
        "data2":[7,7,7,7,7,7,7,7,7,7,7,7,7],
        "background2":'rgba(100, 10, 13, 0.2)',
        
        "min":0,
        "max":8
        
    },

    "Pest":{
        "img": pestIcon,
        "seccion": "Control de Plagas",
        "estado": "Bueno",
        "variable": "El nivel del tanque con pesticida",
        "valor":"medio",
        "accion":"No es necesaria ninguna acción",
        "etapa":"Vegetativa"
    },
    
    "PestChart":{
        "horas":['Prueba 1','Prueba 2','Prueba 3','Prueba 4',],
        "dataname1":"LMR",
        "data1":[0.008,0.004,0.004,0.005],
        "background1":'rgba(0, 150, 136, 0.2)',
        "dataname2":"LMR Permitido",
        "data2":[0.01,0.01,0.01,0.01,],
        "background2":'rgba(100, 10, 13, 0.2)',
        "min":0,
        "max":0.012
        
    },

    "PlanChart":{
        "horas":['Agua','Energía','Nutrientes','Pesticida',],
        "dataname1":"Antes",
        "data1":[100,100,100,100],
        "background1":'rgba(100, 10, 13, 0.2)',
        "dataname2":"Despues",
        "data2":[65,80,70,40],
        "background2":'rgba(0, 150, 136, 0.2)',
        
        "min":0,
        "max":120 
    },

    "PlanChartPie":{
        "horas":['Lechuga','Tomate'],
        "dataname1":"Antes",
        "data1":[70,30],
        "background1":['rgba(0, 150, 136, 0.2)','rgba(100, 10, 13, 0.2)'],
        
        
        "min":0,
        "max":100 
    },

    "PlanChartLine":{
        "horas":['','','','','',''],
        "dataname1":"Antes",
        "data1":[0,23,40,67,67,70],
        "background1":'rgba(100, 10, 13, 0.2)',
        "dataname2":"Despues",
        "data2":[0,46,78,90,95,95],
        "background2":'rgba(0, 150, 136, 0.2)',
        
        "min":0,
        "max":100 
    },



    


}

export default DataBase;