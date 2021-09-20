import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import styled from "styled-components"
import Section from "./components/Section"

const Title = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  color: #3B566E;
  font-size: 35px;
  padding: 20px 0 0 0;
`

class Main extends React.Component {
  render() {
    return (
      <>
        <Title>Progress Tracker</Title>

        <div class="card rounded border-warning border-3">
          <div class="card-body">
          <Section text='M' progress="100%" day={1}/>
          <Section text='T' progress = "80%" day={2}/>
          <Section text='W' progress = "70%" day={3}/>
          <Section text='T' progress = "60%" day={4}/>
          <Section text='F' progress = "40%" day={5}/>
          <Section text='S' progress = "20%" day={6}/>
          <Section text='S' progress = "10%" day={7}/>
          </div>
        </div>
      </>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById("root"))