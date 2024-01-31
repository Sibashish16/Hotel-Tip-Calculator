const fields=document.querySelectorAll('.fields');
// console.log(fields);

const form=document.querySelector('#form');

form.addEventListener('submit',(event)=>{

    event.preventDefault();
    let tipCalc,bill,cnt=0;
    fields.forEach((field)=>{
        const name=field.name.trim();
        const value=field.value.trim();
        console.log(`${name} -> ${value}`);
        if(value===""){
            const errorDiv=document.querySelector(`.error.${name}`);
            errorDiv.style.visibility="visible";
        }
        else if(name==="service" && value==='0'){
            const errorDiv=document.querySelector(`.error.${name}`);
            errorDiv.style.visibility="visible";
        }
        else{
            if(name==='service'){
                tipCalc=Number(value);
            }
            if(name==='amount'){
                bill=Number(value);
            }
            cnt++;
            const errorDiv=document.querySelector(`.error.${name}`);
            errorDiv.style.visibility="hidden";
        }
    });
    if(cnt===3){
        const show=document.querySelector('.answer');
        const answer=document.querySelector('.answer').children;
        show.style.display="block";
        let result=(bill*tipCalc)/100;
        answer[1].innerHTML='₹ '+result.toFixed(2);
    }
    
    
});
