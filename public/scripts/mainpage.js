'use strict'

import { camisetas } from './filtercamisetas.js'
import { calcas } from './filtercalcas.js'
import { sapatos } from './filtersapatos.js'



export default function mainPage() {
  const paginaInicial = document.querySelectorAll('li')
  paginaInicial.forEach((li) => {
    if (li.innerHTML.startsWith('PAGINA')) {
      li.addEventListener('click', camisetas)
    }
    if (li.innerHTML.startsWith('PAGINA')) {
      li.addEventListener('click', calcas)
    }
    if (li.innerHTML.startsWith('PAGINA')) {
      li.addEventListener('click', sapatos)
    } else { }
  })
}

camisetas();
calcas();
sapatos();
