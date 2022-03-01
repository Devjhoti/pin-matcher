const pinDp=document.getElementById('pin-dp');
const pinBtn=document.getElementById('pin-btn');
const pinInput=document.getElementById('pin-input');
const buttons=document.getElementsByClassName('button');
const clearBtn=document.getElementById('clear-btn');
const submitBtn=document.getElementById('submit-btn');
const backBtn=document.getElementById('back-btn');
const attemptLeft=document.getElementById('attempt-left');
attemptLeft.innerText=4;
const attemptLeftAlert=document.getElementById('attempt-left-alert');
const notMatchedAlert=document.getElementById('not-matched-alert');
const matchedAlert=document.getElementById('matched-alert');

// console.log(matchedAlert);
var randomValue='';
var digit='';
pinBtn.addEventListener('click',function(){
    for(let i=0;i>=0;i++){
        randomValue=randomValue+ Math.round(Math.random()*9999);
        
        if(randomValue.length==4){
            break;
        }
        else{
            randomValue='';
            continue;
        }
        
    }
    
    pinDp.value=randomValue;
})

clearBtn.addEventListener('click',function(){
    pinInput.value='';
    digit='';
    matchedAlert.style.display='none';
    notMatchedAlert.style.display='none';

})
backBtn.addEventListener('click',function(){
    digit=pinInput.value.slice(0,-1);
    pinInput.value=digit;
})

for(const button of buttons){
    button.addEventListener('click',function(e){
        digit=digit+e.target.innerText;

        pinInput.value=digit;
    })
}

submitBtn.addEventListener('click',function(){
    if(parseInt(pinDp.value)==parseInt(pinInput.value)){
        matchedAlert.style.display='block';
        notMatchedAlert.style.display='none';
        attemptLeftAlert.style.display='none';
        attemptLeft.innerText=4;
        
    }
    else{
        notMatchedAlert.style.display='block';
        matchedAlert.style.display='none';
        attemptLeftAlert.style.display='block';
        attemptLeft.innerText=parseInt(attemptLeft.innerText)-1;
        if(parseInt(attemptLeft.innerText)==0){
            alert('SECURITY BREACHED!!!! 911 HAS BEEN DIALED');
            submitBtn.setAttribute('disabled',true);
            document.getElementById('refresh').style.display='block';
        }
        else{
            submitBtn.removeAttribute('disabled');
            document.getElementById('refresh').style.display='none';
        }
    }
})
