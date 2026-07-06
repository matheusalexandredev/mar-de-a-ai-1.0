/* ----------------- DADOS DO CARDÁPIO ----------------- */
/* Troque livremente por seus produtos e fotos reais */
const IMG = "https://placehold.co/300x220/6b2166/ffffff?text=";

const BASES = [
  "Açaí Tradicional", "Ninho Trufado", "Cupuaçu", "Chocolate Belga",
  "Maracujá", "Tapioca", "Chocomalte"
].map(nome => ({ nome, preco: 0 }));

const ACOMPANHAMENTOS_TIGELA = [
  "Granola", "Chocoball", "Amendoim Triturado", "Leite em Pó", "Farinha Láctea",
  "Coco Ralado", "Gotas de Chocolate", "M&M", "Ovomaltine", "Cereal Crocante",
  "Morango", "Banana", "Kiwi", "Uva", "Jujuba"
].map(nome => ({ nome, preco: 0 }));

const COBERTURAS_TIGELA = ["Leite Condensado", "Morango"].map(nome => ({ nome, preco: 0 }));

const RECHEIO_GARRAFA_TRADICIONAL = ["Leite em Pó", "Farinha Láctea"].map(nome => ({ nome, preco: 0 }));

const RECHEIOS_GARRAFA_RECHEADO = [
  "Granola", "Chocoball", "Amendoim Triturado", "Leite em Pó",
  "Farinha Láctea", "Coco Ralado", "Ovomaltine", "Nutella"
].map(nome => ({ nome, preco: 0 }));

const menu = [
  {
    categoria: "Tigela e Copo",
    layout: "grid",
    produtos: [
      {
        nome: "Monte sua Tigela ou Copo",
        desc: "Escolha entre Tigela (300 ml) ou Copo (500 ml), até 2 bases, 5 acompanhamentos e 1 cobertura — tudo incluso no preço. Nutella é adicional.",
        preco: 0,
        img: IMG + "Tigela+e+Copo",
        grupos: [
          {
            titulo: "Escolha o tamanho",
            tipo: "unica",
            obrigatorio: true,
            max: 1,
            opcoes: [
              { nome: "300ml", preco: 10.00 },
              { nome: "500ml", preco: 16.00, }
            ]
          },
          {
            titulo: "Bases",
            tipo: "multipla",
            obrigatorio: true,
            max: 2,
            opcoes: BASES
          },
          {
            titulo: "Acompanhamentos",
            tipo: "multipla",
            obrigatorio: false,
            max: 5,
            opcoes: ACOMPANHAMENTOS_TIGELA
          },
          {
            titulo: "Coberturas",
            tipo: "multipla",
            obrigatorio: false,
            max: 1,
            opcoes: COBERTURAS_TIGELA
          },
          {
            titulo: "Adicionais",
            tipo: "multipla",
            obrigatorio: false,
            max: null,
            opcoes: [
              { nome: "Nutella", preco: 2.50 }
            ]
          }
        ]
      }
    ]
  },
  {
    categoria: "Garrafa Tradicionais",
    layout: "row",
    produtos: [
      {
        nome: "Paraíso Roxo",
        tag: "Garrafa Tradicional",
        desc: "Açaí batido com leite condensado e leite em pó ou farinha láctea.",
        preco: 0,
        img: IMG + "Paraiso+Roxo",
        grupos: [
          { titulo: "Escolha o tamanho", tipo: "unica", obrigatorio: true, max: 1,
            opcoes: [{ nome: "300ml", preco: 12.00 }, { nome: "500ml", preco: 16.00 }] }
        ]
      },
      {
        nome: "Tsunami de Açaí",
        tag: "Garrafa Tradicional",
        desc: "Açaí batido com creme de ninho, leite condensado e leite em pó ou farinha láctea.",
        preco: 0,
        img: IMG + "Tsunami+de+Acai",
        grupos: [
          { titulo: "Escolha o tamanho", tipo: "unica", obrigatorio: true, max: 1,
            opcoes: [{ nome: "300ml", preco: 12.00 }, { nome: "500ml", preco: 16.00 }] }
        ]
      },
      {
        nome: "Mar de Chocolate",
        tag: "Garrafa Tradicional",
        desc: "Açaí batido com creme de chocolate belga, leite condensado e leite em pó ou farinha láctea.",
        preco: 0,
        img: IMG + "Mar+de+Chocolate",
        grupos: [
          { titulo: "Escolha o tamanho", tipo: "unica", obrigatorio: true, max: 1,
            opcoes: [{ nome: "300ml", preco: 12.00 }, { nome: "500ml", preco: 16.00 }] }
        ]
      },
      {
        nome: "Areia Branca",
        tag: "Garrafa Tradicional",
        desc: "Ninho batido com leite condensado e leite em pó ou farinha láctea.",
        preco: 0,
        img: IMG + "Areia+Branca",
        grupos: [
          { titulo: "Escolha o tamanho", tipo: "unica", obrigatorio: true, max: 1,
            opcoes: [{ nome: "300ml", preco: 12.00 }, { nome: "500ml", preco: 16.00 }] }
        ]
      },
      {
        nome: "Monte a sua Garrafa Tradicional",
        tag: "Garrafa Tradicional",
        desc: "Escolha o tamanho, até 2 bases e 1 recheio.",
        preco: 0,
        img: IMG + "Monte+a+sua+Garrafa",
        grupos: [
          { titulo: "Escolha o tamanho", tipo: "unica", obrigatorio: true, max: 1,
            opcoes: [{ nome: "300ml", preco: 12.00 }, { nome: "500ml", preco: 16.00 }] },
          { titulo: "Bases", tipo: "multipla", obrigatorio: true, max: 2, opcoes: BASES },
          { titulo: "Recheio", tipo: "unica", obrigatorio: true, max: 1, opcoes: RECHEIO_GARRAFA_TRADICIONAL }
        ]
      }
    ]
  },
  {
    categoria: "Garrafa Recheados",
    layout: "row",
    produtos: [
      {
        nome: "Maré Doce",
        tag: "Garrafa Recheada",
        desc: "Açaí com Nutella (batida + leite em pó ou farinha láctea).",
        preco: 0,
        img: IMG + "Mare+Doce",
        grupos: [
          { titulo: "Escolha o tamanho", tipo: "unica", obrigatorio: true, max: 1,
            opcoes: [{ nome: "300ml", preco: 15.00 }, { nome: "500ml", preco: 19.00 }] }
        ]
      },
      {
        nome: "Nuvem de Coco",
        tag: "Garrafa Recheada",
        desc: "Açaí & creme de tapioca com coco ralado e Nutella (batida + leite em pó ou farinha láctea).",
        preco: 0,
        img: IMG + "Nuvem+de+Coco",
        grupos: [
          { titulo: "Escolha o tamanho", tipo: "unica", obrigatorio: true, max: 1,
            opcoes: [{ nome: "300ml", preco: 15.00 }, { nome: "500ml", preco: 19.00 }] }
        ]
      },
      {
        nome: "Brisa de Amendoim",
        tag: "Garrafa Recheada",
        desc: "Açaí com amendoim triturado e Nutella (batida + leite em pó ou farinha láctea).",
        preco: 0,
        img: IMG + "Brisa+de+Amendoim",
        grupos: [
          { titulo: "Escolha o tamanho", tipo: "unica", obrigatorio: true, max: 1,
            opcoes: [{ nome: "300ml", preco: 15.00 }, { nome: "500ml", preco: 19.00 }] }
        ]
      },
      {
        nome: "Monte a sua Garrafa Recheada",
        tag: "Garrafa Recheada",
        desc: "Escolha o tamanho, até 2 bases e 2 recheios.",
        preco: 0,
        img: IMG + "Monte+Recheada",
        grupos: [
          { titulo: "Escolha o tamanho", tipo: "unica", obrigatorio: true, max: 1,
            opcoes: [{ nome: "300ml", preco: 15.00 }, { nome: "500ml", preco: 19.00 }] },
          { titulo: "Bases", tipo: "multipla", obrigatorio: true, max: 2, opcoes: BASES },
          { titulo: "Recheios", tipo: "multipla", obrigatorio: true, max: 2, opcoes: RECHEIOS_GARRAFA_RECHEADO }
        ]
      }
    ]
  }
];

let lojaAberta = true; // troque para true para simular loja aberta
let carrinho = []; // { nome, preco, qtd }

/* ----------------- RENDER DO CARDÁPIO ----------------- */
const container = document.getElementById('menuContainer');

function money(v){ return v.toFixed(2).replace('.', ','); }

function renderMenu(filtroTexto = "", categoriaAtiva = null){
  container.innerHTML = "";
  menu.forEach(sec => {
    if(categoriaAtiva && sec.categoria !== categoriaAtiva) return;

    const produtosFiltrados = sec.produtos.filter(p =>
      p.nome.toLowerCase().includes(filtroTexto.toLowerCase())
    );
    if(produtosFiltrados.length === 0) return;

    const title = document.createElement('h2');
    title.className = 'section-title';
    title.textContent = sec.categoria;
    container.appendChild(title);

    const grid = document.createElement('div');
    grid.className = sec.layout === 'grid' ? 'card-grid' : 'row-grid';

    produtosFiltrados.forEach(p => {
      const el = document.createElement('div');
      if(sec.layout === 'grid'){
        el.className = 'prod-card';
        el.innerHTML = `
          <img src="${p.img}" alt="${p.nome}">
          <div class="prod-body">
            <h3>${p.nome}</h3>
            ${p.desc ? `<p>${p.desc}</p>` : ''}
            <div class="prod-price">R$ ${money(p.preco)}</div>
          </div>`;
      } else {
        el.className = 'row-card';
        el.innerHTML = `
          <div class="row-text">
            <h3>${p.nome}</h3>
            ${p.tag ? `<p class="tag">${p.tag}</p>` : ''}
            ${p.desc ? `<p class="desc">${p.desc}</p>` : ''}
            <div class="prod-price">${p.precoDe ? 'A partir de ' : ''}R$ ${money(p.precoDe ?? p.preco)}</div>
          </div>
          <img src="${p.img}" alt="${p.nome}">`;
      }
      el.addEventListener('click', () => abrirModalProduto(p));
      grid.appendChild(el);
    });

    container.appendChild(grid);
  });

  if(container.innerHTML === ""){
    container.innerHTML = `<p style="color:var(--texto-suave);padding:40px 0;text-align:center;">Nenhum produto encontrado.</p>`;
  }
}
renderMenu();

/* ----------------- BUSCA ----------------- */
document.getElementById('searchInput').addEventListener('input', e => {
  renderMenu(e.target.value, categoriaAtual);
});

/* ----------------- CATEGORIAS (dropdown) ----------------- */
let categoriaAtual = null;
const catSelect = document.getElementById('catSelect');
const catDropdown = document.getElementById('catDropdown');
const catLabel = document.getElementById('catSelectLabel');

catDropdown.innerHTML = `<button data-cat="">Todas as categorias</button>` +
  menu.map(s => `<button data-cat="${s.categoria}">${s.categoria}</button>`).join('');

catSelect.addEventListener('click', (e) => {
  e.stopPropagation();
  catSelect.classList.toggle('open');
  catDropdown.classList.toggle('show');
});
catDropdown.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    categoriaAtual = btn.dataset.cat || null;
    catLabel.textContent = categoriaAtual || "Lista de categorias";
    catDropdown.classList.remove('show');
    catSelect.classList.remove('open');
    renderMenu(document.getElementById('searchInput').value, categoriaAtual);
  });
});
document.addEventListener('click', () => {
  catDropdown.classList.remove('show');
  catSelect.classList.remove('open');
});

/* ----------------- CARRINHO ----------------- */
const cartEmpty = document.getElementById('cartEmpty');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const toast = document.getElementById('toast');

const cupomModal = document.getElementById('cupomModal');
const cupomInput = document.getElementById('cupomInput');
const cupomMsg = document.getElementById('cupomMsg');
const cuponsValidos = {
  "TESTE": 3.00,
};
let taxaEntrega = 2.00; // troque pelo valor real, ou 0 se ainda não for cobrar
let cupomAplicado = null;

/* Total usado no carrinho lateral do DESKTOP (sidebar) */
function calcularTotal(){
  const subtotal = carrinho.reduce((s, i) => s + i.preco * i.qtd, 0);
  let total = subtotal;

  if(cupomAplicado){
    total = cupomAplicado.valor < 1
      ? total * (1 - cupomAplicado.valor)
      : Math.max(0, total - cupomAplicado.valor);
  }

  return total + taxaEntrega;
}

/* Total usado na sacola MOBILE, checkout e mensagem do WhatsApp */
function calcularTotalCarrinho(){
  let total = carrinho.reduce((s, i) => s + i.preco * i.qtd, 0);
  if(cupomAplicado){
    total = cupomAplicado.valor < 1
      ? total * (1 - cupomAplicado.valor)
      : Math.max(0, total - cupomAplicado.valor);
  }
  return total + taxaEntrega; // <-- AQUI estava faltando a taxa
}

function addAoCarrinho(p, qtd = 1, obs = ""){
  const preco = p.preco ?? p.precoDe;
  const existente = carrinho.find(i => i.nome === p.nome && i.obs === obs);
  if(existente){ existente.qtd += qtd; }
  else { carrinho.push({ nome: p.nome, preco, qtd, obs }); }
  renderCarrinho();
  mostrarToast(`${p.nome} adicionado à sacola`);
}

function removerItemDoCarrinho(index){
  carrinho.splice(index, 1);
  renderCarrinho();
  if(cartModal.classList.contains('show')){
    renderCartModal();
  }
  mostrarToast('Item removido da sacola');
}

function renderCarrinho(){
  if(carrinho.length === 0){
    cartEmpty.style.display = 'flex';
    cartItemsEl.style.display = 'none';
    cartTotalEl.style.display = 'none';
    atualizarCartFloatMobile();
    return;
  }
  cartEmpty.style.display = 'none';
  cartItemsEl.style.display = 'flex';
  cartTotalEl.style.display = 'flex';

  cartItemsEl.innerHTML = carrinho.map((i, index) => `
    <div class="cart-line">
      <div class="cart-line-main">
        <span>
          <span class="qty">${i.qtd}x</span> ${i.nome}
          ${i.obs ? `<br><small style="color:var(--texto-suave);font-weight:400;">Obs: ${i.obs}</small>` : ''}
        </span>
      </div>
      <div class="cart-line-actions">
        <button class="cart-remove-btn" data-index="${index}" type="button" title="Remover item">✕</button>
        <span>R$ ${money(i.preco * i.qtd)}</span>
      </div>
    </div>
  `).join('');

  cartItemsEl.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => removerItemDoCarrinho(Number(btn.dataset.index)));
  });

  const total = calcularTotal();
  cartTotalEl.innerHTML = `<span>Total</span><span>R$ ${money(total)}</span>`;
  atualizarCartFloatMobile();
}

const cartFloat = document.getElementById('cartFloat');
const cfQtd = document.getElementById('cfQtd');
const cfValor = document.getElementById('cfValor');
const bnBadge = document.getElementById('bnBadge');
const cartModal = document.getElementById('cartModal');

function atualizarCartFloatMobile(){
  const totalItens = carrinho.reduce((s, i) => s + i.qtd, 0);
  const total = calcularTotalCarrinho();
  const bnSacola = document.getElementById('bnSacola');

  if(totalItens > 0){
    cartFloat.classList.add('show');
    cfQtd.textContent = totalItens === 1 ? '1 item' : `${totalItens} itens`;
    cfValor.textContent = `R$ ${money(total)}`;
    bnBadge.style.display = 'flex';
    bnBadge.textContent = totalItens;
    bnSacola.classList.add('tem-item');
  } else {
    cartFloat.classList.remove('show');
    bnBadge.style.display = 'none';
    bnSacola.classList.remove('tem-item');
  }
}

function renderCartModal(){
  const wrap = document.getElementById('cartModalItems');
  const resumo = document.getElementById('cartModalResumo');
  const cmSubtotal = document.getElementById('cmSubtotal');
  const cmTaxa = document.getElementById('cmTaxa');
  const cmTotal = document.getElementById('cmTotal');
  const couponMobile = document.getElementById('couponMobile');
  const footer = document.getElementById('cartModalFooter');

  if(carrinho.length === 0){
    wrap.innerHTML = `<p style="text-align:center;color:var(--texto-suave);padding:20px 0;">Sacola vazia</p>`;
    resumo.style.display = 'none';
    couponMobile.style.display = 'none';
    footer.style.display = 'none';
    return;
  }

  wrap.innerHTML = carrinho.map((i, index) => `
    <div class="cart-line">
      <div class="cart-line-main">
        <span><span class="qty">${i.qtd}x</span> ${i.nome}
          ${i.obs ? `<br><small style="color:var(--texto-suave);font-weight:400;">Obs: ${i.obs}</small>` : ''}
        </span>
      </div>
      <div class="cart-line-actions">
        <button class="cart-remove-btn" data-index="${index}" type="button" title="Remover item">✕</button>
        <span>R$ ${money(i.preco * i.qtd)}</span>
      </div>
    </div>
  `).join('');

  wrap.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => removerItemDoCarrinho(Number(btn.dataset.index)));
  });

  const subtotal = carrinho.reduce((s, i) => s + i.preco * i.qtd, 0);
  const total = calcularTotalCarrinho();

  cmSubtotal.textContent = `R$ ${money(subtotal)}`;
  if(cmTaxa) cmTaxa.textContent = `R$ ${money(taxaEntrega)}`;
  cmTotal.textContent = `R$ ${money(total)}`;
  resumo.style.display = 'block';
  couponMobile.style.display = 'block';
  footer.style.display = 'block';
}

function mostrarToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(mostrarToast._t);
  mostrarToast._t = setTimeout(()=> toast.classList.remove('show'), 2200);
}

/* ----------------- STATUS DA LOJA ----------------- */
function aplicarStatus(){
  const dot = document.getElementById('statusDot');
  const hint = document.getElementById('statusHint');
  const btn = document.getElementById('statusBtn');
  if(lojaAberta){
    dot.textContent = "Aberto";
    dot.classList.add('aberto');
    hint.textContent = "Fechamos às 23h00";
    if(btn){
      btn.textContent = "Fazer pedido";
      btn.classList.add('aberto');
    }
  } else {
    dot.textContent = "Fechado";
    dot.classList.remove('aberto');
    hint.textContent = "Abrimos segunda às 13h00";
    if(btn){
      btn.textContent = "Estabelecimento fechado";
      btn.classList.remove('aberto');
    }
  }
}
aplicarStatus();

/* ----------------- MODAL DETALHES DO PRODUTO ----------------- */
const prodModal = document.getElementById('prodModal');
const pmImg = document.getElementById('pmImg');
const pmNome = document.getElementById('pmNome');
const pmDesc = document.getElementById('pmDesc');
const pmPreco = document.getElementById('pmPreco');
const pmObs = document.getElementById('pmObs');
const pmObsCount = document.getElementById('pmObsCount');
const pmQtd = document.getElementById('pmQtd');
const pmTotal = document.getElementById('pmTotal');
const pmMenos = document.getElementById('pmMenos');
const pmMais = document.getElementById('pmMais');
const pmGrupos = document.getElementById('pmGrupos');

let produtoAtual = null;
let qtdAtual = 1;
let selecoesAtuais = [];

function subtituloGrupo(g){
  if(g.obrigatorio) return `Escolha de 1 a ${g.max} ${g.max === 1 ? 'opção' : 'opções'}`;
  if(g.max) return `Escolha até ${g.max} ${g.max === 1 ? 'opção' : 'opções'}`;
  return "Escolha quantos quiser";
}

function renderGrupos(){
  if(!produtoAtual || !produtoAtual.grupos || produtoAtual.grupos.length === 0){
    pmGrupos.innerHTML = "";
    return;
  }

  pmGrupos.innerHTML = produtoAtual.grupos.map((g, gi) => {
    const selecionadasNoGrupo = selecoesAtuais.filter(s => s.grupoIdx === gi).length;
    const badgeContagem = g.max ? `${selecionadasNoGrupo}/${g.max}` : `${selecionadasNoGrupo}`;

    const opcoesHtml = g.opcoes.map((op, oi) => {
      const selecionada = selecoesAtuais.some(s => s.grupoIdx === gi && s.opcaoIdx === oi);
      const grupoCheio = g.max && selecionadasNoGrupo >= g.max && !selecionada;
      return `
        <div class="grupo-opcao ${selecionada ? 'selecionada' : ''}">
          <div class="info">
            <b>${op.nome}</b>
            <span>${op.preco > 0 ? '+ R$ ' + money(op.preco) : 'Grátis'}</span>
          </div>
          <button type="button" data-grupo="${gi}" data-opcao="${oi}" ${grupoCheio ? 'disabled' : ''}>
            ${selecionada ? '✓' : '+'}
          </button>
        </div>`;
    }).join('');

    return `
      <div class="grupo-opcoes">
        <div class="grupo-head">
          <div class="linha1">
            <div>
              <h4>${g.titulo}</h4>
              <div class="sub">${subtituloGrupo(g)}</div>
            </div>
            <div class="grupo-badges">
              <span class="badge">${badgeContagem}</span>
              ${g.obrigatorio ? '<span class="badge obrig">OBRIGATÓRIO</span>' : ''}
            </div>
          </div>
        </div>
        ${opcoesHtml}
      </div>`;
  }).join('');

  pmGrupos.querySelectorAll('button[data-grupo]').forEach(btn => {
    btn.addEventListener('click', () => {
      const gi = Number(btn.dataset.grupo);
      const oi = Number(btn.dataset.opcao);
      selecionarOpcao(gi, oi);
    });
  });
}

function selecionarOpcao(gi, oi){
  const g = produtoAtual.grupos[gi];
  const op = g.opcoes[oi];
  const jaSelecionada = selecoesAtuais.find(s => s.grupoIdx === gi && s.opcaoIdx === oi);

  if(g.tipo === 'unica'){
    selecoesAtuais = selecoesAtuais.filter(s => s.grupoIdx !== gi);
    if(!jaSelecionada){
      selecoesAtuais.push({ grupoIdx: gi, opcaoIdx: oi, nome: op.nome, preco: op.preco || 0 });
    }
  } else {
    if(jaSelecionada){
      selecoesAtuais = selecoesAtuais.filter(s => !(s.grupoIdx === gi && s.opcaoIdx === oi));
    } else {
      const noGrupo = selecoesAtuais.filter(s => s.grupoIdx === gi).length;
      if(g.max && noGrupo >= g.max){
        mostrarToast(`Máximo de ${g.max} opções em "${g.titulo}"`);
        return;
      }
      selecoesAtuais.push({ grupoIdx: gi, opcaoIdx: oi, nome: op.nome, preco: op.preco || 0 });
    }
  }
  renderGrupos();
  atualizarModalProduto();
}

function gruposValidos(){
  if(!produtoAtual || !produtoAtual.grupos) return true;
  return produtoAtual.grupos.every((g, gi) => {
    if(!g.obrigatorio) return true;
    return selecoesAtuais.some(s => s.grupoIdx === gi);
  });
}

function abrirModalProduto(p){
  produtoAtual = p;
  qtdAtual = 1;
  selecoesAtuais = [];
  renderGrupos();

  pmImg.src = p.img;
  pmImg.alt = p.nome;
  pmNome.textContent = p.nome;
  pmDesc.textContent = p.desc || p.tag || "";
  pmObs.value = "";
  pmObsCount.textContent = "0";

  atualizarModalProduto();
  prodModal.classList.add('show');
}

function precoUnitario(p){
  return p.preco ?? p.precoDe;
}

function atualizarModalProduto(){
  pmQtd.textContent = qtdAtual;
  pmMenos.disabled = qtdAtual <= 1;

  const extra = selecoesAtuais.reduce((s, o) => s + o.preco, 0);
  const preco = precoUnitario(produtoAtual) + extra;

  pmPreco.textContent = `R$ ${money(preco)}`;
  pmTotal.textContent = `R$ ${money(preco * qtdAtual)}`;

  const btn = document.getElementById('pmAdicionar');
  const valido = gruposValidos();
  btn.disabled = !valido;
  btn.style.opacity = valido ? 1 : 0.5;
}

pmMenos.addEventListener('click', () => {
  if(qtdAtual > 1){ qtdAtual--; atualizarModalProduto(); }
});
pmMais.addEventListener('click', () => {
  qtdAtual++; atualizarModalProduto();
});
pmObs.addEventListener('input', () => {
  pmObsCount.textContent = pmObs.value.length;
});

document.getElementById('pmAdicionar').addEventListener('click', () => {
  if(!gruposValidos()){
    mostrarToast("Selecione as opções obrigatórias");
    return;
  }
  const extra = selecoesAtuais.reduce((s, o) => s + o.preco, 0);
  const nomesSelecionados = selecoesAtuais.map(s => s.nome).join(', ');
  const obsFinal = [nomesSelecionados, pmObs.value.trim()].filter(Boolean).join(' • ');

  addAoCarrinho(
    { ...produtoAtual, preco: precoUnitario(produtoAtual) + extra },
    qtdAtual,
    obsFinal
  );
  prodModal.classList.remove('show');
});
document.getElementById('pmClose').addEventListener('click', () => prodModal.classList.remove('show'));
prodModal.addEventListener('click', (e) => { if(e.target === prodModal) prodModal.classList.remove('show'); });

/* ----------------- MODAL PROMOÇÕES ----------------- */
const promoModal = document.getElementById('promoModal');
const promoItems = [
  { titulo: '2x por R$35', texto: 'Dois açaís com acompanhamentos ilimitados por R$35,00.' },
];

function renderPromocoes(){
  const body = promoModal.querySelector('.modal-body');
  body.innerHTML = `
    <div class="promo-list">
      ${promoItems.map(item => `
        <div class="promo-item">
          <strong>${item.titulo}</strong>
          <span>${item.texto}</span>
        </div>
      `).join('')}
    </div>
  `;
}

renderPromocoes();

document.getElementById('btnPromocoes').addEventListener('click', () => promoModal.classList.add('show'));
document.getElementById('closePromo').addEventListener('click', () => promoModal.classList.remove('show'));
promoModal.addEventListener('click', (e) => { if(e.target === promoModal) promoModal.classList.remove('show'); });

document.querySelector('.coupon .side-row').addEventListener('click', () => {
  cupomModal.classList.add('show');
  cupomInput.value = cupomAplicado ? cupomAplicado.codigo : "";
  cupomMsg.textContent = "";
  cupomInput.focus();
});

/* Cupom acionado a partir da sacola mobile (fica FORA de qualquer loop) */
const couponMobileEl = document.getElementById('couponMobile');
if(couponMobileEl){
  couponMobileEl.addEventListener('click', () => {
    cartModal.classList.remove('show'); // fecha a sacola pra abrir o cupom por cima
    cupomModal.classList.add('show');
    cupomInput.value = cupomAplicado ? cupomAplicado.codigo : "";
    cupomMsg.textContent = "";
    cupomInput.focus();
  });
}

document.getElementById('closeCupom').addEventListener('click', () => cupomModal.classList.remove('show'));
cupomModal.addEventListener('click', (e) => { if(e.target === cupomModal) cupomModal.classList.remove('show'); });

document.getElementById('aplicarCupom').addEventListener('click', () => {
  const codigo = cupomInput.value.trim().toUpperCase();
  if(!codigo){
    cupomMsg.textContent = "Digite um código.";
    cupomMsg.style.color = "var(--vermelho)";
    return;
  }
  if(!cuponsValidos[codigo]){
    cupomMsg.textContent = "Cupom inválido ou expirado.";
    cupomMsg.style.color = "var(--vermelho)";
    return;
  }

  cupomAplicado = { codigo, valor: cuponsValidos[codigo] };
  cupomMsg.textContent = "Cupom aplicado com sucesso!";
  cupomMsg.style.color = "var(--verde)";
  renderCarrinho();
  mostrarToast(`Cupom ${codigo} aplicado`);
  setTimeout(() => cupomModal.classList.remove('show'), 900);
});

/* ----------------- MODAL CHECKOUT ----------------- */
const checkoutModal = document.getElementById('checkoutModal');
const NUMERO_WHATSAPP = "5562999999999";
let tipoEntregaAtual = "entrega";

document.getElementById('abrirCheckout').addEventListener('click', () => {
  if(carrinho.length === 0){
    mostrarToast("Sua sacola está vazia");
    return;
  }
  renderResumoPedido();
  checkoutModal.classList.add('show');
});
document.getElementById('closeCheckout').addEventListener('click', () => checkoutModal.classList.remove('show'));
checkoutModal.addEventListener('click', (e) => { if(e.target === checkoutModal) checkoutModal.classList.remove('show'); });

document.getElementById('tipoEntrega').addEventListener('click', () => setTipoEntrega('entrega'));
document.getElementById('tipoRetirada').addEventListener('click', () => setTipoEntrega('retirada'));

document.getElementById('cfVerSacola').addEventListener('click', () => { renderCartModal(); cartModal.classList.add('show'); });
document.getElementById('bnSacola').addEventListener('click', () => { renderCartModal(); cartModal.classList.add('show'); });
document.getElementById('closeCartModal').addEventListener('click', () => cartModal.classList.remove('show'));
cartModal.addEventListener('click', (e) => { if(e.target === cartModal) cartModal.classList.remove('show'); });

document.getElementById('abrirCheckoutDaSacola').addEventListener('click', () => {
  cartModal.classList.remove('show');
  document.getElementById('abrirCheckout').click();
});

document.getElementById('bnPromocoes').addEventListener('click', () => document.getElementById('btnPromocoes').click());
document.getElementById('bnInicio').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelectorAll('.bn-item').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.bn-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

function setTipoEntrega(tipo){
  tipoEntregaAtual = tipo;
  document.getElementById('tipoEntrega').classList.toggle('ativo', tipo === 'entrega');
  document.getElementById('tipoRetirada').classList.toggle('ativo', tipo === 'retirada');
  document.getElementById('campoEndereco').style.display = tipo === 'entrega' ? 'block' : 'none';
}

document.getElementById('ckPagamento').addEventListener('change', (e) => {
  document.getElementById('campoTroco').style.display = e.target.value === 'Dinheiro' ? 'block' : 'none';
});

function renderResumoPedido(){
  const resumo = document.getElementById('resumoPedido');
  const linhas = carrinho.map(i => `
    <div class="linha"><span>${i.qtd}x ${i.nome}</span><span>R$ ${money(i.preco*i.qtd)}</span></div>
  `).join('');
  const total = calcularTotalCarrinho();
  resumo.innerHTML = linhas
    + `<div class="linha"><span>Taxa de entrega</span><span>R$ ${money(taxaEntrega)}</span></div>`
    + `<div class="linha total"><span>Total</span><span>R$ ${money(total)}</span></div>`;
}

function validarCampo(id, condicao){
  const campo = document.getElementById(id).closest('.form-field');
  campo.classList.toggle('invalido', !condicao);
  return condicao;
}

document.getElementById('enviarWhatsapp').addEventListener('click', () => {
  const nome = document.getElementById('ckNome').value.trim();
  const endereco = document.getElementById('ckEndereco').value.trim();
  const pagamento = document.getElementById('ckPagamento').value;
  const troco = document.getElementById('ckTroco').value.trim();
  const obsGeral = document.getElementById('ckObsGeral').value.trim();

  let ok = true;
  ok = validarCampo('ckNome', nome.length > 0) && ok;
  if(tipoEntregaAtual === 'entrega'){
    ok = validarCampo('ckEndereco', endereco.length > 0) && ok;
  }
  ok = validarCampo('ckPagamento', pagamento.length > 0) && ok;
  if(!ok){
    mostrarToast("Preencha os campos obrigatórios");
    return;
  }

  const mensagem = montarMensagemPedido({ nome, endereco, pagamento, troco, obsGeral, tipo: tipoEntregaAtual });
  const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
  checkoutModal.classList.remove('show');
});

function montarMensagemPedido({ nome, endereco, pagamento, troco, obsGeral, tipo }){
  const total = calcularTotalCarrinho();

  let msg = `*NOVO PEDIDO - Mar de Açaí*\n\n`;
  msg += `*Cliente:* ${nome}\n`;
  msg += `*Tipo:* ${tipo === 'entrega' ? 'Entrega' : 'Retirada no local'}\n`;
  if(tipo === 'entrega') msg += `*Endereço:* ${endereco}\n`;
  msg += `\n*Itens:*\n`;

  carrinho.forEach(i => {
    msg += `▪ ${i.qtd}x ${i.nome} — R$ ${money(i.preco * i.qtd)}\n`;
    if(i.obs) msg += `   _Obs: ${i.obs}_\n`;
  });

  if(cupomAplicado){
    msg += `\n*Cupom aplicado:* ${cupomAplicado.codigo}\n`;
  }

  msg += `\n*Taxa de entrega:* R$ ${money(taxaEntrega)}\n`;
  msg += `*Total: R$ ${money(total)}*\n`;
  msg += `\n*Pagamento:* ${pagamento}`;
  if(pagamento === 'Dinheiro' && troco) msg += ` (troco para R$ ${troco})`;
  if(obsGeral) msg += `\n\n*Observação geral:* ${obsGeral}`;

  return msg;
}

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') {
    promoModal.classList.remove('show');
    prodModal.classList.remove('show');
    cupomModal.classList.remove('show');
    checkoutModal.classList.remove('show');
    cartModal.classList.remove('show');
  }
});

/* ----------------- NAVEGAÇÃO ----------------- */
document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    btn.classList.add('active');

    if (btn.id === 'btnPromocoes') {
      promoModal.classList.add('show');
      return;
    }

    const target = document.getElementById(btn.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});