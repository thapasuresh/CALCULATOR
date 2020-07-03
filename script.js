class Calculator {
constructor(previousOperandTextElement,currentOperandTextElement){
    this.previousOperandTextElement=previousOperandTextElement;
    this.currentOperandTextElement=currentOperandTextElement;
    this.clear();
}




clear(){
    this.currentOperand='';
    this.prevOperand='';
    this.operation=undefined;

}
delete(){

}
appendNumber(number){
    if(number==="." && this.currentOperand.includes('.')) return 
    this.currentOperand = this.currentOperand.toString()+number.toString();


}
chooseOperator(operation){
    if(this.currentOperand==='') return
    if(this.prevOperand==!''){
        this.compute();
    }
        this.operation=operation;
        this.prevOperand=this.currentOperand;
        this.currentOperand='';
}


compute(){
    let computation;
    const previous=parseFloat(this.prevOperand);
    const current=parseFloat(this.currentOperand);

    switch (this.operation){
        case '+':
            computation=previous+current;
            break;
    
        case '-':
            computation=previous-current;
            break;
        
        case '*':
            computation=previous*current;
            break;
        
        case '/':
            computation=previous/current;    
            break;
        default:
            return    
    
        }
        this.currentOperand=computation;
        this.operation=undefined
        this,this.prevOperand=''
   

}


upDateDisplay(){
    this.currentOperandTextElement.innerText=this.currentOperand;
    this.previousOperandTextElement.innerText=this.prevOperand;

}




}



const numberButtons=document.querySelectorAll('[data-number]');
const operationButtons=document.querySelectorAll('[data-operation]');
const equalButton= document.querySelector('[data-equals]');
const deleteButton=document.querySelector('[data-delete]');
const allClearButton=document.querySelector('[data-all-clear]');
const previousOperandTextElement =document.querySelector('[data-previous-operand]');
const currentOperandTextElement=document.querySelector('[data-current-operand]');

const calculator= new Calculator(previousOperandTextElement,currentOperandTextElement);
numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText);
        calculator.upDateDisplay();
    })

});
operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.chooseOperator(button.innerText);
        calculator.upDateDisplay();
    })
});
allClearButton.addEventListener('click',()=>{
        calculator.clear();
        calculator.upDateDisplay();
    })

    equalButton.addEventListener('click',()=>{
        calculator.compute();
        calculator.upDateDisplay();
       
    })

