function buscarCep (){
    var cep = document.getElementById("cep").value ;
    var url = "http://viacep.com.br/ws/"+ cep +"/json/";

    var obj = new XMLHttpRequest();
    obj.open('GET', url, true);

    obj.onreadystatechange = function(){
        if (obj.readyState == 4 && obj.status == 200){
            
            // converte de JSON para objeto
            var dados = JSON.parse(obj.responseText);

            document.getElementById("rua").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("cidade").value = dados.localidade;
            document.getElementById("estado").value = dados.uf;
        }
    }

    obj.send();
}