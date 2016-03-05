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
        nome: 'Azurite',
        descricao: 'Sistema Operacional: Android OS, v4.1.2 Tamanho do Display: 4.7" Câmera: 5MP GPS: SIM',
        preco: 8.5,
        img: "img/produtos/galaxy-win-duos.png",
        ativo: 1,
        qtd: 2,
      },
       {
        id: 2,
        nome: 'Azurite',
        descricao: 'Sistema Operacional: Android OS, v4.1.2 Tamanho do Display: 4.7" Câmera: 5MP GPS: SIM',
        preco: 8.5,
        img: "img/produtos/galaxy-win-duos.png",
        ativo: 1,
        qtd: 1,
      },
       {
        id: 3,
        nome: 'Azurite',
        descricao: 'Sistema Operacional: Android OS, v4.1.2 Tamanho do Display: 4.7" Câmera: 5MP GPS: SIM',
        preco: 8.5,
        img: "img/produtos/galaxy-win-duos.png",
        ativo: 1,
        qtd: 3,
      },
       {
        id: 4,
        nome: 'Azurite',
        descricao: 'Sistema Operacional: Android OS, v4.1.2 Tamanho do Display: 4.7" Câmera: 5MP GPS: SIM',
        preco: 8.5,
        img: "img/produtos/galaxy-win-duos.png",
        ativo: 0,
        qtd: 1,
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
