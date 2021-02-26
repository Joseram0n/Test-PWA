function calcPor(){
    let total = document.getElementById("n_total").value;
    let num = document.getElementById("n_actual").value;
    console.log(total)
    console.log(num)
    document.getElementById("res").value = ((num*100)/total).toFixed(2);
}