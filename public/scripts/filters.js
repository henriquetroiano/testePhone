
export default function filters() {

  function categorias() {


    const selectCategory = document.querySelectorAll('.categorias a');

    selectCategory.forEach((a) => {
      if (a.innerHTML === 'Roupas') {
        a.addEventListener('click', function (event) {
          event.preventDefault();
          const selDivs = document.querySelectorAll('div[data-view="true"]');
          selDivs.forEach((div) => {
            div.dataset.view = false;
          })
          const selRoupas = document.querySelectorAll('.camisetas, .calcas');
          selRoupas.forEach((div) => {
            div.dataset.view = true;
          })

        })
      }
    })

    selectCategory.forEach((a) => {
      if (a.innerHTML === 'Sapatos') {
        a.addEventListener('click', function (event) {
          event.preventDefault();
          const selDivs = document.querySelectorAll('div[data-view="true"]');
          selDivs.forEach((div) => {
            div.dataset.view = false;
          })
          const selRoupas = document.querySelectorAll('.sapatos');
          selRoupas.forEach((div) => {
            div.dataset.view = true;
          })
        })
      }
    })

    selectCategory.forEach((a) => {
      if (a.innerHTML === 'Acessórios') {
        a.addEventListener('click', function (event) {
          event.preventDefault();
          console.log('Não há acessórios!!')
          const selDivs = document.querySelectorAll('div[data-view="true"]');
          selDivs.forEach((div) => {
            div.dataset.view = false;
          })
        })
      }
    })
  }

  function cores() {
    const selCores = document.querySelectorAll('.buttons label')
    selCores.forEach((label) => {
      if (label.value === 'vermelho') {
        label.addEventListener('click', function () {
          console.log('vermeio')
        })


      }
    })
  }


  categorias()

}




