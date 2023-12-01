// console.log("Hello World!");// output to the console
// let place;// very good to declear variables sinve u cant use it to declear a variable twice
// const places = 10;// can't be redecleared and the variable cannot be changed
// place = "false";
// const nestedObject = {
//     layer1:{
//         layer2:{
//             layer3:{
//                 targetValue:10
//             }
//         }
//     }
// };
// console.log(nestedObject.layer1.layer2.layer3.targetValue);
// /*
// == checks only if the values are equal to each other
// === checks if both the types and value are equal
// you can't use == or === to compare arrays or objects directly

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// used to select different choices based on a particular condition


// */
// /*
// function name(params) {
    
// }
// declearing a function
// */
// place.toLocaleLowerCase(); //Converts each character in the string to lower case
// place.split("") //Splits the string into it's individual characters
// // 
let Reference = 0;
let toDisplay = '';
let toSolve = [];
let delRef = [];
let fx=[];
let Val1=[];


function setAttributes(el, attrs) {
    for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

function trig(){
    // Sets trigonometric funtionalities on the calculator
    let elem=document.querySelectorAll("input[type=button]");
    setAttributes(elem[0], {"value": ">", "onclick": "Num()"});
    setAttributes(elem[6], {"value": "sin", "onclick": "trigFunction('sin')"})
    setAttributes(elem[7], {"value": "cos", "onclick": "trigFunction('cos')"});
    setAttributes(elem[8], {"value": "tan", "onclick": "trigFunction('tan')"});
    setAttributes(elem[10], {"value": "sin⁻¹", "onclick": "trigFunction('arcsin')"});
    setAttributes(elem[11], {"value": "cos⁻¹", "onclick": "trigFunction('arccos')"});
    setAttributes(elem[12], {"value": "tan⁻¹", "onclick": "trigFunction('arctan')"});
    setAttributes(elem[14], {"value": "sinh", "onclick": "trigFunction('sinh')"});
    setAttributes(elem[15], {"value": "cosh", "onclick": "trigFunction('cosh')"});
    setAttributes(elem[16], {"value": "tanh", "onclick": "trigFunction('tanh')"});
    setAttributes(elem[18], {"value": "sinh⁻¹", "onclick": "trigFunction('arcsinh')"});
    setAttributes(elem[19], {"value": "cosh⁻¹", "onclick": "trigFunction('arccosh')"});
    setAttributes(elem[20], {"value": "tanh⁻¹", "onclick": "trigFunction('arctanh')"});
        // 6 7 8/ 10 11 12/ 14 15 16/ 18 19 20
}

function Num(){
    // Set normal functionalities on the calculator
    let elem=document.querySelectorAll("input[type=button]");
    setAttributes(elem[0], {"value": "<", "onclick": "trig()"});
    setAttributes(elem[6], {"value": "7", "onclick": "Display('7')"});
    setAttributes(elem[7], {"value": "8", "onclick": "Display('8')"});
    setAttributes(elem[8], {"value": "9", "onclick": "Display('9')"});
    setAttributes(elem[10], {"value": "4", "onclick": "Display('4')"});
    setAttributes(elem[11], {"value": "5", "onclick": "Display('5')"});
    setAttributes(elem[12], {"value": "6", "onclick": "Display('6')"});
    setAttributes(elem[14], {"value": "1", "onclick": "Display('1')"});
    setAttributes(elem[15], {"value": "2", "onclick": "Display('2')"});
    setAttributes(elem[16], {"value": "3", "onclick": "Display('3')"});
    setAttributes(elem[18], {"value": "00", "onclick": "Display('00')"});
    setAttributes(elem[19], {"value": "0", "onclick": "Display('0')"});
    setAttributes(elem[20], {"value": ".", "onclick": "Display('.')"});
}

function Display(val){
    // Displays result when equal to sign is pressed
    if (Reference==0){
        toSolve.push(val);
    }else{
        Val1[Reference-1]+=val;
    }
    toDisplay+=val;
    delRef.push(1);
    document.querySelector('.display input').value = toDisplay;
}

function clearDisplay(){
    // Clears everyting for the user to input problem to solve
    toDisplay='';
    delRef=[];
    toSolve=[];
    document.querySelector('.display input').value = toDisplay;
}

function backSpace(){
    // Clears the previously entered value in case the user makes an error
    for (let i=0; i<delRef.slice(-1); i++){
        toDisplay=toDisplay.slice(0, -1);
    }
    delRef=delRef.slice(0, -1);
    document.querySelector('.display input').value = toDisplay;
    toSolve.pop();
}

function trigFunction(element){
    let elem=document.querySelectorAll("input[type=button]");
    setAttributes(elem[3], {"value": ")", "onclick": "endTrig()"});
    if (element=='sin'){
        toDisplay+='sin(';
        delRef.push(4);
        fx.push('sin');
        Reference+=1;
        Val1.push('0');
    }
    else if (element=='cos'){
        toDisplay+='cos(';
        delRef.push(4);
        fx.push("cos");
        Reference+=1;
        Val1.push('0');
    }else if (element=='tan'){
        toDisplay+='tan(';
        delRef.push(4);
        fx.push("tan");
        Reference+=1;
        Val1.push('0');
    }else if (element=='arcsin'){
        toDisplay+='arcsin(';
        delRef.push(7);
        fx.push("arcsin");
        Reference+=1;
        Val1.push('0');
    }else if (element=='arccos'){
        toDisplay+='arccos(';
        delRef.push(7);
        fx.push("arccos");
        Reference+=1;
        Val1.push('0');
    }
    else if (element=='arctan'){
        toDisplay+='arctan(';
        delRef.push(7);
        fx.push("arctan");
        Reference+=1;
        Val1.push('0');
    }else if (element=='sinh'){
        toDisplay+='sinh(';
        delRef.push(5);
        fx.push("sinh");
        Reference+=1;
        Val1.push('0');
    }else if (element=='cosh'){
        toDisplay+='cosh(';
        delRef.push(5);
        fx.push("cosh");
        Reference+=1;
        Val1.push('0');
    }else if (element=='tanh'){
        toDisplay+='tanh(';
        delRef.push(5);
        fx.push("tanh");
        Reference+=1;
        Val1.push('0');
    }
    else if (element=='arcsinh'){
        toDisplay+='arcsinh(';
        delRef.push(8);
        fx.push("arcsinh");
        Reference+=1;
        Val1.push('0');
    }else if (element=='arccosh'){
        toDisplay+='arccosh(';
        delRef.push(8);
        fx.push("arccosh");
        Reference+=1;
        Val1.push('0');
    }else{
        toDisplay+='arctanh(';
        delRef.push(8);
        fx.push("arctanh");
        Reference+=1;
        Val1.push('0');
    }
    document.querySelector('.display input').value = toDisplay;
}
function endTrig(){
    Reference-=1;
    if (Reference==0){
        if (fx=='sin'){
            toSolve.push(Math.sin(eval(Val1[Reference])*Math.PI/180));
        }else if (fx=='cos'){
            toSolve.push(Math.cos(eval(Val1[Reference])*Math.PI/180));
        }else if (fx=='tan'){
            toSolve.push(Math.tan(eval(Val1[Reference])*Math.PI/180));
        }else if (fx=='arcsin'){
            toSolve.push(Math.asin(eval(Val1[Reference])*Math.PI/180));
        }else if (fx=='arccos'){
            toSolve.push(Math.acos(eval(Val1[Reference])*Math.PI/180));
        }
        else if (fx=='arctan'){
            toSolve.push(Math.atan(eval(Val1[Reference])*Math.PI/180));
        }else if (fx=='sinh'){
            toSolve.push(Math.sinh(eval(Val1[Reference])*Math.PI/180));
        }else if (fx=='cosh'){
            toSolve.push(Math.cosh(eval(Val1[Reference])*Math.PI/180));
        }else if (fx=='tanh'){
            toSolve.push(Math.tanh(eval(Val1[Reference])*Math.PI/180));
        }
        else if (fx=='arcsinh'){
            toSolve.push(Math.asinh(eval(Val1[Reference])*Math.PI/180));
        }else if (fx=='arccosh'){
            toSolve.push(Math.acosh(eval(Val1[Reference])*Math.PI/180));
        }else{
            toSolve.push(Math.atanh(eval(Val1[Reference])*Math.PI/180));
        }
        toDisplay+=')';
        document.querySelector('.display input').value = toDisplay;
        Val1=[];

    }
}
function equalTo(){
    document.querySelector('.display input').value =eval(toSolve.join(""));
    toDisplay=eval(toSolve.join(""));
    delRef=[];
        for (let i=0; i<toDisplay.toString().length; i++){
            delRef.push(1)
        }
}