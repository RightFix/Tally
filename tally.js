//document.write(Date());
window.onload = function(){
  let con = document.getElementById("con");
  let clear = document.getElementById("clear");
   let count = 0
  con.onclick = function(){
     count += 1;
    counts.result.value = count;
  };
  clear.onclick = function(){
    count = 0;
    counts.result.value = count;
  };
};