(function() {
  var app = angular.module('walmartApp', []);

  app.controller('ProdutosController', function(){
    this.produtos = produtosLoja;

    this.somaTotal = function(){
      var totalSoma = 0;

      for (var i in this.produtos){
        if(this.produtos[i].ativo == 1)
          totalSoma += this.produtos[i].qtd * this.produtos[i].preco;
      }

      return totalSoma;
    };

    this.total = this.somaTotal();

    this.removerProduto = function(id){
       for (var i in this.produtos){
        if(this.produtos[i].id == id)
          this.total -= (this.produtos[i].qtd * this.produtos[i].preco);
      } 
    };


  });

   app.controller('EnderecosController', function(){
    this.enderecos = meusEnderecos;
  });

   app.controller('UsuarioController', function(){
    this.usuario = usuarioPerfil;
  });

  var produtosLoja = [
      {
        id: 1,
        nome: 'Samsung Galaxy Win 2',
        descricao: 'O Samsung Galaxy Win 2 é um smartphone Android avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 4.5 polegadas com uma resolução de 800x480 pixels que não é das mais elevadas.',
        preco: 799.00,
        img: "img/produtos/galaxy-win-duos.png",
        ativo: 1,
        qtd: 2,
      },
       {
        id: 2,
        nome: 'Barraca MORMAII BALI',
        descricao: 'Levante acampamento com a Barraca Mormaii Bali p/ 4 pessoas e aproveite o melhor da viagem em meio à natureza. Prática de montar é ideal para se acomodar com a família.',
        preco: 450.00,
        img: "img/produtos/barraca-camp.png",
        ativo: 1,
        qtd: 1,
      },
       {
        id: 3,
        nome: 'Aspirador de Pó Electrolux Ergo',
        descricao: 'Agilidade e praticidade na hora da limpeza. Acompanha unidade portátil que é ideal paralimpar móveis, estofados e aquelas migalhas indesejadas que ficam em cima da mesa.',
        preco: 225.99,
        img: "img/produtos/aspirador.png",
        ativo: 1,
        qtd: 3,
      },

    ];

  var meusEnderecos = [
      {
        id: 1,
        nomeEndereco: 'Endereço de cobrança',
        rua: 'Rua Calh. Angelo Presotto',
        numero: '225',
        bairro: 'São José',
        complemento: '',
        cidade: 'Franca',
        estado: "SP",
        cep: '74401-289',
        pontoReferencia: '',
      },

      {
        id: 2,
        nomeEndereco: 'Minha Casa',
        rua: 'Rua Monsenhor Mario',
        numero: '232',
        bairro: 'Centro',
        complemento: '',
        cidade: 'Carmo do Rio Claro',
        estado: "MG",
        cep: '37150-000',
        pontoReferencia: '',
      },
    ];

  var usuarioPerfil = 
      {
        id: 1,
        nome: "Túlio Navarro",
        email: "tnavarrodesenvolvimento@gmail.com",
        sexo: "Masculino",
        cpf: '787.897.980-487',
        dataNasc: '17/05/1992',
        telefone: '',
        celular: '(11) 99999-9999'
      };

})();
