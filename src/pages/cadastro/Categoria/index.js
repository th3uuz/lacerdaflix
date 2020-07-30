import React, { useState, useEffect } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]) 
  const [values, setValues] = useState(valoresIniciais)
  
  
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange (e) {
    const{ value } = e.target
    setValue(
      e.target.getAttribute('name'),
      value 
    )
  }


  useEffect(() => {
    console.log('alo alo alo')
    const url = 'http://localhost:8080/categorias'
    fetch(url)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json()
        setCategorias({
          ...resposta,
        })
      })
  }, [])

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>  

      <form onSubmit={function handleSubmit(e) {
        e.preventDefault()
        setCategorias([
          ...categorias,
          values
        ])

        setValues(valoresIniciais)
      }}>
        <FormField 
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField 
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField 
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        
        <button>
          Cadastrar
        </button>
      </form>

      {categorias.legth === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => {
          return (
            <li key={categoria}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
      <Link to="/">
          Ir para home
        </Link>
    </PageDefault>
  )
}

export default CadastroCategoria