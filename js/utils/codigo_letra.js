

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function intervalo(min, max) {
  const array = []
  let array_i = 0
  for (let i = min; i < max; i++) {
    array[array_i] = i
    array_i++
  }
  return array
}

function fatiar(colecao, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += colecao[i]
  }
  return string
}

function nova_lista(criterio, colecao, separador) {
  const array = []
  let array_i = 0
  let pos = 0
  for (let i = 0; i < len(colecao); i++) {
    if (colecao[i] === separador) {
      array[array_i] = criterio(colecao, pos, i - 1)
      array_i++
      pos = i + 1
    }
  }
  return array
}

function codigo_letra(letra) {
  const maiusculas = nova_lista(fatiar, 'A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.V.W.X.Y.Z.', '.')
  const minusculas = nova_lista(fatiar, 'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.', '.')
  const n_maiusculas = intervalo(65, 91)
  const n_minusculas = intervalo(97, 123)
  for (let i = 0; i < len(maiusculas); i++) {
    if (maiusculas[i] === letra) {
      return n_maiusculas[i]
    }
  }
  for (let i = 0; i < len(minusculas); i++) {
    if (minusculas[i] === letra) {
      return n_minusculas[i]
    }
  }
  return false
}

function letra_codigo(num) {
  const maiusculas = nova_lista(fatiar, 'A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.V.W.X.Y.Z.', '.')
  const minusculas = nova_lista(fatiar, 'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.', '.')
  const n_maiusculas = intervalo(65, 91)
  const n_minusculas = intervalo(97, 123)
  for (let i = 0; i < len(n_maiusculas); i++) {
    if (n_maiusculas[i] === num) {
      return maiusculas[i]
    }
  }
  for (let i = 0; i < len(n_minusculas); i++) {
    if (n_minusculas[i] === num) {
      return minusculas[i]
    }
  }
  return false
}

function eh_palavra(colecao) {
  for (let i = 0; i < len(colecao); i++) {
    const codigo_da_letra = codigo_letra(colecao[i])
    const afirmacao = codigo_da_letra >= 65 && codigo_da_letra <= 90 || codigo_da_letra >= 97 && codigo_da_letra <= 122
    if (!afirmacao) {
      return false 
    }
  }
  return true
}
