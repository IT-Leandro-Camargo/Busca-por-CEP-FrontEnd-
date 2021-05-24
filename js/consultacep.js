var form = {
    btnPesquisar: document.getElementById('btn-pesquisar'),
    campoCep:  document.getElementById('cep'),
    areaDeInformacao: document.getElementById('informacao')
};

form.btnPesquisar.addEventListener('click', (evento) => {
    evento.preventDefault();

    if(!form.campoCep.value){
       alert("Informe um CEP para a consulta.");
       return;
    }
    obterDadosPorCep(form.campoCep.value);
})


function obterDadosPorCep(cep){

    fetch(`http://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => resposta.json())
    .then(resposta => {
        // Aqui posso fazer oque eu quiser...
        // console.log(resposta);
        atualizarCepNaTela(resposta);
    })
    .catch(() => alert('Deu ruim na consulta.'))
}

function atualizarCepNaTela(obj){
    form.areaDeInformacao.innerHTML = JSON.stringify(obj);
}

/**
 * CRUD
 * um sistema frontend
 * Create
 * Read
   Update
 * Delete
 */