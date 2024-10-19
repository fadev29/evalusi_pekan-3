//1.
for (let angka = 1; angka <= 20; angka++) {
    if(angka % 2 === 0) {
        console.log(+ angka+'berkualitas');
    } else if( angka % 3 === 0) {
        console.log(+angka + 'I love coding');
    } else{
        console.log(+angka + 'santai');
        
    }
}
//2.
let nilaiSantri = [ 50, 90, 65, 67, 89, 80, 50, 97, 84 ];
 
    let tambah = nilaiSantri.reduce((acu , nilaiSantri) => acu + nilaiSantri,0);
    let bagi = tambah / nilaiSantri.length
    console.log(bagi);
//3.
let cekAnagram = (a, b ) => {
 return a.split('').sort().join() === b.split('').sort().join();
}
console.log(cekAnagram('listen','silent'));
console.log(cekAnagram('evil','vile'));
console.log(cekAnagram('evil','vile'));

//4.
for(let a = 1; a < 10; a++) {
        for(let b = 1; b < 10; b++) {
          if(b >= a && a + b <= 10 || b <= a && a + b >= 10) {
            document.write('*');
          }else{
            document.write('-');
          }
           
        }
        document.write('<br/>');
    }
// 5.
for(let y = 1; y < 10; y++) {
    for(let x = 1; x < 10; x++) {
      if(x <= y && y + x <= 10||x >= y && y + x >= 10 ) {
        document.write('*');
      }else{
        document.write('-');
      }
       
    }
    document.write('<br/>');
  }
  
  
  
    
   


 