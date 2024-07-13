let show = document.querySelector('#display');
let keys = document.querySelectorAll('.key');
keys.forEach(button => {
   button.addEventListener('click', () => {
      let num = button.id;
      var lastChar = show.value.charAt(show.value.length - 1);
      console.log(lastChar)
      if(num === "clear"){
        show.value = "";
      }else if(show.value === "" && (num === "+" || num === "-" || num === "/" || num === "*")){
        alert("Invalid");
      }else if(show.value != "" && (num === "+" || num === "-" || num === "/" || num === "*")){
        if((lastChar === "+" || lastChar === "-" || lastChar === "/" || lastChar === "*")){
          alert("Invalid: Can't enter two operators consecutively");}
          else{
            show.value += num
          }
      }else if(num === "="){
        if(show.value === ""){
          alert("Nothing to calculate");
        }else{
          show.value = eval(show.value);}
      }else{
        show.value += num;
      }
   });
});

 