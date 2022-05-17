function calcularpedido(){
//entrada
corteTesoura=document.getElementById('corteTesoura').value;  
barbasimples=document.getElementById('barbaSimples').value;
depilacao=document.getElementById('depilacao').value;
quantcorteTesoura=document.getElementById('quantcorteTesoura').value;
quantbarbasimples=document.getElementById('quantbarbaSimples').value;
quantdepilacao=document.getElementById('quantdepilacao').value;

//processamento
//corteTesoura
if( corteTesoura=="Corte com Tesoura "){
    imagem="img/corteTesoura.jpg"
    precocorteTesoura="60,00"}

    else if ( corteTesoura == " corte com maquina"){
       imagem = "img/maquina.jpg";
       precocorteTesoura = "45,00";
   }
   else{
       img="img/tesoura e maquina.jpg";
       precocorteTesouraemaquina=" 52,00";
   }
   //barbaSimples
   if(barbasimples=="simples"){
     precobarbaSimples="30,00";
    }
    else if (barbaSimples=="modelada"){
        precobarbaSimples="45,00";
    }
    //depilacao
     if(depilacao=="Cera Quente"){
      precodepilacao=="300.00";
     }
     else if (depilacao== "Cera fria"){
         precodepilacao=="250,00";

     }
     else(depilacao=="Laser") 
        precodepilacao=="850,00";
    
     
     total= (quantcorteTesoura * precocorteTesoura ) + (quantbarbasimples * precobarbaSimples) + (quantdepilacao * precodepilacao) 
     //saida
     document.getElementById('total').value=total.toFixed(2);
     document.getElementById('foto').src=imagem;
    } 
        function  finalizar()
    total = document.getElementById('total').value;
    if (total == 0.00){  
      msg = "Você deve selecionar pelo menos 1 elemento da lista.";
    }


    

       
   



