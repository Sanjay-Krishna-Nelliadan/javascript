function buttonclick(val)
{
    document.getElementById("output").value+=val
}

function clearDisplay()
{

    document.getElementById("output").value=""
    
}
function equalClick()
{
var text=document.getElementById("output").value
var result=eval(text)
document.getElementById("output").value=result

}
