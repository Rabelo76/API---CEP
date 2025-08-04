const rginput = document.getElementById("RG");

function formatorg(input) {
    input.value = input.value
      .replace(/\D/g, '')                      
      .replace(/(\d{3})(\d)/, '$1.$2')         
      .replace(/(\d{3})(\d)/, '$1.$2')         
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  function formatocpf(input) {
    input.value = input.value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  function formataTelefone(input) {
    let valor = input.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length <= 10) {
    
        valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
    
        valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }

    input.value = valor;
}
 
function formataDDD(input) {
    let valor = input.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);
    input.value = valor;
}