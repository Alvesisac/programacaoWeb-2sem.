function verificarLogin(){

    let usuario = document.getElementById("txtUsuario").value.trim();
    let senha = document.getElementById("txtSenha").value.trim();
    let mensagemERRO = document.getElementById("mensagemERRO");

    if(usuario == "senac" && senha == "2025"){

        alert("Login realizado com sucesso!");
        window.location.href = "index.hmtl";
    }
    else{
        alert("Usuário ou senha inválidos!");
        mensagemERRO.txtContent ="Usuário ou senha incorretos"
        mensagemERRO.style.color = "red";
    }

}

function Cadastrar(){

    let usuario = document.getElementById("txtUsuario").value.trim();
    let senha = document.getElementById("txtSenha").value.trim();
    let dataNascimento = document.getElementById("txtNascimento").value.trim();
    let tipoConta = document.getElementById("selTipoConta").value.trim();

    if(usuario == "" || senha == "" || dataNascimento =="" || tipoConta == ""){
        alert('Todos os campos devems ser preenchidos!!')

    }
    else{

        validarIdade(dataNascimento);
        alert('Cadastro realizado com sucesso!')
    }
}

function validarIdade (dataNascimento){

    let dataAtual =  new Date();
    let dataNasc  = new Date(dataNascimento);
    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
    let mesAtual =dataAtual.getMonth();
    let mesNasc = dataAtual.getMonth();

    if( idade < 18 ){
        alert('Você não pode estar aqui!!! SAIA.')
    } 
    else{
        alert('Seja bem-vindo');
    }
}