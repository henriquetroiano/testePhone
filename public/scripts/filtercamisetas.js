
export default function selCamisetas() {
  const cadaCamiseta = document.querySelectorAll('li')
  cadaCamiseta.forEach((li) => {
    
    if (li.innerHTML.startsWith('CAMISETAS')) {
      li.addEventListener('click', function() {
        const seldivs = document.querySelectorAll('div[data-view="true"]')
        seldivs.forEach((div) => {
          div.dataset.view = false;
        })
      })
    }
    if (li.innerHTML.startsWith('CAMISETAS')) {
      li.addEventListener('click', camisetas)
    } 
  })
}





export function camisetas() {
  $.ajax({
    url: '../mock-api/V1/categories/1',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
      $(data.items).each(function (index, value) {
        const parentDiv = document.querySelector('.grid-products');
        const refDiv = document.querySelector('.end-products');
        const produtoIndividual = document.createElement('div');
        produtoIndividual.dataset.color = value.filter[0].color.toString();
        produtoIndividual.dataset.sku = value.sku.toString();
        produtoIndividual.dataset.id = value.id.toString();
        produtoIndividual.dataset.view = true;

        produtoIndividual.classList.add('camisetas');

        // para linkar a imagem
        const img = document.createElement('img')
        img.src = value.image.toString();
        img.dataset.color = value.filter[0].color.toString();
        produtoIndividual.appendChild(img, produtoIndividual)
        // para linkar o nome
        const nome = document.createElement('p');
        nome.innerText = value.name.toString();
        produtoIndividual.appendChild(nome, produtoIndividual)
        //preco com desconto
        const desconto = document.createElement('p')
        value.specialprice ? desconto.innerText = value.specialprice.toFixed(2) : '';
        // preco
        const preco = document.createElement('p')
        preco.innerText = 'R$' + value.price.toFixed(2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        produtoIndividual.appendChild(preco, produtoIndividual)
        // botao comprar / sem funcao :(
        const buyButton = document.createElement('button');
        buyButton.type = 'submit';
        buyButton.innerText = "comprar"
        buyButton.classList.add('buy');
        produtoIndividual.appendChild(buyButton, produtoIndividual)

        //linkar a div de cada produto na div principal da lista de produtos
        parentDiv.appendChild(produtoIndividual, refDiv)
        produtoIndividual.dataset.blank = true;

      })
    }
  })
}
