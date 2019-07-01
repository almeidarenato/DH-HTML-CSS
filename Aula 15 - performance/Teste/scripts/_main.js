window.onload = () => {
  console.log("Arquivo Iniciado! \n");

  //adicionando ação no Header
  let cabecalho = document.querySelector("#meuheader");
  console.log(cabecalho);
  cabecalho.onclick = () => {
    alert("eu sou cabeçalho");
  };

  //adicionando ação no Rodape
  let alertarRodape = () => {
    alert("eu sou rodapé \n você me clicou");
  };
  let rodape = document.querySelector("#meufooter");
  console.log(rodape);
  rodape.addEventListener("click", alertarRodape);

  //Criando um botao dentro do DOM
  let button = document.createElement("button");
  let buttontxt = document.createTextNode("Teste");
  button.setAttribute("id", "meubotao");
  button.setAttribute("class", "btn-outline-primary");
  button.setAttribute("style", "margin-left:12px");
  button.append(buttontxt);
  document.querySelector("#div2").appendChild(button);
  button.onclick = () => {
    alert("eu sou um botão");
  };

  //Criando um link dentro do DOM
  let meuLink = document.createElement("a");
  let meuLinkTxt = document.createTextNode("me clica");
  //meuLink - atributos
  meuLink.style.color = "pink";
  meuLink.href = "http://www.google.com.br/";
  meuLink.className = "badge badge-pill badge-primary";
  meuLink.setAttribute("target", "_blank");

  meuLink.setAttribute("style", "margin-left:12px");
  meuLink.appendChild(meuLinkTxt);

  //anexando o link na primeira div
  var primeiraSessao = document.querySelector("#div1");
  primeiraSessao.appendChild(meuLink);

  //impede que o link faça a ação padrao
  const impedirAcesso = event => {
    event.preventDefault();
  };
  //adiciona o eventlistener com click e impedir Acesso
  meuLink.addEventListener("click", impedirAcesso);
  //desbloqueia o eventlistener com click e impedirAcesso
  let codigoPromo = prompt("qual seu código? -- 123");
  codigoPromo == "123"
    ? meuLink.removeEventListener("click", impedirAcesso)
    : alert("IIhh errou");
};
