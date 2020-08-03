// Validación de campos formulario
window.onload = function(){

    //Función para colorear el contorno del div de color rojo
    function coloringInputRed(elId){
        document.getElementById(elId).style.borderColor = "red";
    }

    // Función para validar los campos de signos vitales
    function eventAlert(elmId, mssg) {
        var elem = document.getElementById(elmId);
        if(elem !== null) {
            elem.onclick = function(){
                switch(elem.id){
                    case "tensionarterial":
                        var expr = new RegExp(/^\d{1,3}\/\d{1,3}$/);
                        ta = document.getElementById('tensionarterial').value;
                        if(!(expr.test(ta)) && elem.value != ""){
                            alert("El paciente presenta alteraciones en "+mssg);
                        }
                    break;
                    case "frecuenciacardiaca":
                        if(!(elem.value >= 60 && elem.value <=100) && elem.value != ""){
                            alert("El paciente presenta alteraciones en "+mssg);
                        }
                    break;
                    case "frecuenciarespiratoria":
                        if((elem.value < 10 || elem.value > 60) && elem.value != ""){
                            alert("El paciente presenta alteraciones en "+mssg);
                        }
                    break;
                    case "temperatura":
                        if((elem.value < 36.5 || elem.value > 36.5) && elem.value != ""){
                            alert("El paciente presenta alteraciones en "+mssg);
                        }
                    break;
                    case "glucemia":
                        if((elem.value < 80 || elem.value > 140) && elem.value != ""){
                            alert("El paciente presenta alteraciones en "+mssg);
                        }
                    break;
                    case "saturacionOxigeno":
                        if((elem.value < 75 || elem.value > 100) && elem.value != ""){
                            alert("El paciente presenta alteraciones en "+mssg);
                        }
                    break;
                }
            }
        }
    }

    
    

    /* Objeto signos vitales (Json)
    *Se utilizará para validar los valores
    ingresados en los campos de los signos vitales.
    */ 
    var obj1 = {"tensionarterial":"la tensión arterial sistólica", 
    "frecuenciacardiaca":"la frecuencia cardiaca",
    "frecuenciarespiratoria":"la frecuencia respiratoria",
    "temperatura":"su temperatura corporal",
    "glucemia":"sus niveles de glucemia",
    "saturacionOxigeno":"la saturación de oxígeno"};


    /* Objeto de campos obligatorios
    *Se utilizará para validar que los campos obligatorios 
    no queden vacíos.
    */ 

    var obj2 = {"resumenAntecedente":"resumen antecedente",
    "padecimiento":"padecimiento",
    "interrogatorio":"interrogatorio",
    "tensionarterial":"tensión arterial sistólica",
    "frecuenciacardiaca":"frecuencia cardiaca",
    "frecuenciarespiratoria":"la frecuencia respiratoria",
    "temperatura":"temperatura",
    "glucemia":"glucemia",
    "saturacionOxigeno":"saturación de oxígeno",
    "peso":"peso",
    "talla":"talla",
    "imc":"imc",
    "grasa":"grasa",
    "perimetroCefalico":"perímetro cefálico",
    "cintura":"cintura",
    "cadera":"cadera",
    "icc":"icc",
    "perimetroAbdominal":"perímtero abdominal",
    "perimetroBrazo":"perímtero brazo",
    "segmentoSuperior":"segmento superior",
    "segmentoInferior":"segmento inferior",
    "pesoSeco":"peso seco",
    "superficieCorporal":"superficie corporal"};


    /*Función para asignar los valores correspondientes a la función evenAlert
    *asigna tanto id del campo a evaluar, así como la cadena de texto que se le
    concatena al alert que se envía al validar el campo*/

    function AssingObj(obj){
        for (var i in obj){
            eventAlert(i, obj[i]);
        }
    }

    
    // Función para validar que los campos no estén vacíos, en caso de no estar vacíos regresa un true
    function validate(eId, msg){
        var x=true;
        var item = document.getElementById(eId);
        /* Una vez obtenido el id de la etiqueta, se obtiene el valor de ese campo y en caso de haber espacios los corta 
        para verificar que no esté vacío*/
        if(item.value.trim().length === 0){
            alert("Por favor llene el campo de "+msg);
            coloringInputRed(item.id);
            x=false;
        }
        return x;
    }


    // Aquí van los campos del formulario que se revisan que no estén vacíos
    // Se obtiene el id del botón que guardará la información de los campos
    var element = document.getElementById("btn");
    element.onclick = function(){
        var arreglo = [];
        arreglo.push(validate("resumenAntecedente","resumen antecedente"));
        arreglo.push(validate("padecimiento","padecimiento"));
        arreglo.push(validate("interrogatorio","interrogatorio"));
        
        arreglo.push(validate("tensionarterial","tensión arterial sistólica"));
        arreglo.push(validate("frecuenciacardiaca","frecuencia cardiaca"));
        arreglo.push(validate("frecuenciarespiratoria","la frecuencia respiratoria"));
        arreglo.push(validate("temperatura","temperatura"));
        arreglo.push(validate("glucemia","glucemia"));
        arreglo.push(validate("saturacionOxigeno","saturación de oxígeno"));

        arreglo.push(validate("peso","peso"));
        arreglo.push(validate("talla","talla"));
        arreglo.push(validate("imc","imc"));
        arreglo.push(validate("grasa","grasa"));
        arreglo.push(validate("perimetroCefalico","perímetro cefálico"));
        arreglo.push(validate("cintura","cintura"));
        arreglo.push(validate("cadera","cadera"));
        arreglo.push(validate("icc","icc"));
        arreglo.push(validate("perimetroAbdominal","perímtero abdominal"));
        arreglo.push(validate("perimetroBrazo","perímtero brazo"));
        arreglo.push(validate("perimetroPierna","perímtero pierna"));
        arreglo.push(validate("segmentoSuperior","segmento superior"));
        arreglo.push(validate("segmentoInferior","segmento inferior"));
        arreglo.push(validate("pesoSeco","peso seco"));
        arreglo.push(validate("superficieCorporal","superficie corporal"));


    
        // Se verifica que la información esté en el formulario
        if(!arreglo.includes(false)){
            alert("Información guardada");

        }
    }

    // Llamada a la función para validar los campos de signos vitales
    AssingObj(obj1);

    
}



