function simpan() {
    let output = document.getElementById("output").value; 
    let nama = document.getElementById("name").value; 
    let nim = document.getElementById("nim").value; 
    let alamat = document.getElementById("alamat").value;

    let simpanOutput = document.getElementById("output"); 

    simpanOutput.innerHTML = `
        <h3>Succsesfuly</h3>
        <p>Nama: ${nama}</p>
        <p>NIM: ${nim}</p>
        <p>Alamat: ${alamat}</p>
    `;
}
