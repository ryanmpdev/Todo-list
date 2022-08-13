import React, { Component }  from "react";
import styled from "styled-components";

export const Caixa = styled.div`
    background-color: black;
    width:80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 98vh;
    border-radius: 20px;

    h1{
        color: aliceblue;
        font-size: 40px;
    }
`

export const Recebe = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 40px;

input {
    width: 40%;
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 18px;
    background-color: #9ED2C6;
}

button {
    width: 90px;
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 18px;
    margin-left: 3%;
    cursor: pointer;
}

button:hover {
   background-color: aqua;
}
`

export const Resultado = styled.section`
  width: 52%;

   p {
    color: azure;
    font-size: 30px;
    width: 80%;
   }

   button {
    width: 150px;
    outline: none;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
}

button:hover {
   background-color: aqua;
}
`

export default class Tarefas extends Component{

  state = {
      tarefa: "",
      listaTarefas: []
  }

  buscarTarefas = (event) => {
      this.setState({
          tarefa: event.target.value
      })
  }

  add = () => {
      if(this.state.tarefa !== ""){
          this.setState(
              {
                  listaTarefas: this.state.listaTarefas.concat({
                      tarefa: this.state.tarefa,
                      id: Date.now()
                  }),
                  tarefa: "",
              }
          
          )
      }
  }

  remover = (id) => {
      this.setState({
          listaTarefas: this.state.listaTarefas.filter((item) => item.id !== id)
      })
  }

  enter = (event) => {
    if (this.state.tarefa.length > 0 && event.key === "Enter"){
      this.setState({
        listaTarefas: this.state.listaTarefas.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ""
      })
    }
  }

  render(){
      return(
          <Caixa>
              <h1>Lista de Tarefas</h1>
              <Recebe>
                  <input
                    onChange={this.buscarTarefas}
                    value={this.state.tarefa}
                    onKeyPress={this.enter}
                    />

                  <button onClick={this.add}>Adicionar</button>
              </Recebe>

              <Resultado>
                  {this.state.listaTarefas.map((item) => (
                          <div key={item.id}>                             
                             
                                <p>{item.tarefa}</p>
                             
                              <button onClick={() => this.remover(item.id)}>Excluir tarefa</button>
                          </div>
                      ))}
              </Resultado>
          </Caixa>
      )
  }
}