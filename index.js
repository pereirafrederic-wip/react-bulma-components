import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { Button, Heading, Columns } from "react-bulma-components/full";
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>

      <Heading size={1}>Large Heading</Heading>
<Heading size={2}>Not So Large Heading</Heading>

<Button size="large">Large Button</Button>
<Button size="small">Small Button</Button>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
       <Button
  renderAs="a"
  href="https://alligator.io"
  color="danger"
  size="medium"
  rounded
  outlined
>
  Wowza, it's a link!
</Button>
<Button color="success">Alligators are the best!</Button>


<Columns>
  <Columns.Column size="one-fifth">20%</Columns.Column>
  <Columns.Column>80%</Columns.Column>
</Columns>
<Columns>
  <Columns.Column size="one-quarter">25%</Columns.Column>
  <Columns.Column>75%</Columns.Column>
</Columns>
<Columns>
  <Columns.Column size="one-third">33.333333333%</Columns.Column>
  <Columns.Column>66.666666667%</Columns.Column>
</Columns>
<Columns>
  <Columns.Column size="half">50%</Columns.Column>
  <Columns.Column>Also 50%</Columns.Column>
</Columns>
<Columns>
  <Columns.Column size="two-thirds">66.666666667%</Columns.Column>
  <Columns.Column>33.333333333%</Columns.Column>
</Columns>
<Columns>
  <Columns.Column size="three-quarters">75%</Columns.Column>
  <Columns.Column>25%</Columns.Column>
</Columns>
<Columns>
  <Columns.Column size={1}>One</Columns.Column>
  <Columns.Column>Eleven</Columns.Column>
</Columns>
<Columns>
  <Columns.Column size={2}>Two</Columns.Column>
  <Columns.Column>Ten</Columns.Column>
</Columns>
<Columns>
  <Columns.Column size={3}>Three</Columns.Column>
  <Columns.Column>Nine</Columns.Column>
</Columns>
<Columns>
  <Columns.Column size={4}>Four</Columns.Column>
  <Columns.Column>Eight</Columns.Column>
</Columns>
<Columns>
  <Columns.Column size={5}>Five</Columns.Column>
  <Columns.Column>Seven</Columns.Column>
</Columns>
<Columns>
  <Columns.Column size={6}>Six</Columns.Column>
  <Columns.Column>Six</Columns.Column>
</Columns>
<Columns>
  <Columns.Column size={7}>Seven</Columns.Column>
  <Columns.Column>Five</Columns.Column>
</Columns>
<Columns>
  <Columns.Column size={8}>Eight</Columns.Column>
  <Columns.Column>Four</Columns.Column>
</Columns>
<Columns>
  <Columns.Column size={9}>Nine</Columns.Column>
  <Columns.Column>Three</Columns.Column>
</Columns>
<Columns>
  <Columns.Column size={10}>Ten</Columns.Column>
  <Columns.Column>Two</Columns.Column>
</Columns>
<Columns>
  <Columns.Column size={11}>Eleven</Columns.Column>
  <Columns.Column>One</Columns.Column>
</Columns>
      </div>
      
    );
  }
}

render(<App />, document.getElementById('root'));
