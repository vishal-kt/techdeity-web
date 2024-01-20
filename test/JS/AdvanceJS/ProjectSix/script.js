const insert = document.getElementById('insert')
window.addEventListener('keydown',function (e) {
   insert.innerHTML=`
   
   <div class='color'>

    <table>
    <tr>
    <th> keyCode</th>
    <th> keyName</th>
    <th> code </th>
    </tr>
    <tr>
        <td> ${e.keyCode } </td>
        <td> ${e.key=== " "? "Space":e.key} </td>
        <td> ${e.code} </td>
        </tr>
   </div>
   
   `
})