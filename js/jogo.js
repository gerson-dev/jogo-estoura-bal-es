function addBola (){
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");
    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);
    var cor = Math.floor(Math.random() * 999999 );
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:#"+cor+";");
    bola.setAttribute("onclick", "estourar(this)");
    document.body.appendChild(bola);
   }
   function estourar(elemento) {
    document.body.removeChild(elemento);

    var p = parseInt(document.getElementById("pontos").innerHTML);
    p = p +1;
    document.getElementById("pontos").innerHTML = p;
    if (p > 100) {
     alert ("PARABÉNS VOÇÊ GANHOU PAMELA, SAFIRA, SAULO-FILHO");
     window.location.href = window.location.href;
    }
    }

    // let atualizar = window.location.reload();

   function iniciar (){
       setInterval(addBola, 1000);
   }

  
   function dificuldade2(){
        window.location.reload();
        setInterval(addBola, 1000);
    }

    function dificuldade3(){
        setInterval(addBola, 500);
    }