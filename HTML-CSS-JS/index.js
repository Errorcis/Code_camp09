alert("hello")
function changeColor(){
    // alert("Change Color Function.....")
    let tcolor = document.querySelector('#in1').value
    let bcolor = document.querySelector('#in2').value
    // alert(tcolor) *alert เช็คค่าเข้าหรือไม่
    // alert(bcolor) *alert เช็คค่าเข้าหรือไม่
    document.querySelector('h2').style.color = tcolor
    document.querySelector('h2').style.backgroundColor = bcolor

}