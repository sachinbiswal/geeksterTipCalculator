function calculate() {
    const select=document.getElementById("valueOfoption")
    const index=select.selectedIndex
    console.log(index);
    const value=+select[index].value
    const bill=+document.getElementById("bill").value
    const people=+document.getElementById("people").value
    const total=(bill*value)/(100*people)
    if(bill==""){
        alert("please enter bill")
    }else if(index==0){
        alert("please select how much your services?")
    }
    else if(people==""){
        alert("please enter the no. of people")
    }else{
        const first=document.getElementById("first")
    first.innerText="TIP AMOUNT"
    const second=document.getElementById("second")
    second.innerText="₹"+total.toFixed(2)
    const third=document.getElementById("third")
    third.innerText="each"
    }
    
}
