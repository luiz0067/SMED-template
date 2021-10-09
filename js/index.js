var app = new Vue({
    el: '#app',
    data: {
      name: 'Vue.js',
      conteudo:"Eu sou o conteúdo"
    },
    // define métodos dentro do objeto `methods`
    methods: {
        carrega_link: function (element) {
        this.conteudo=element.href;
        //if (element.href=="http://www.toledo.pr.gov.br/escola/smed/");
        $(".botao_menu_ativo").each(function() {
            var currentElement = $(this);
            currentElement.attr("class","botao_menu");
        });
        element.className="botao_menu_ativo";
        return false;
      }
    }
  })

  /*ready() {
        this.$http.get('/route').then(response => {
            this.html = response.data;
        });
    }*//