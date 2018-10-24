import React,  { Component }  from 'react';
import NavbarApp from './NavbarApp';
import { Button, Fa, Input } from 'mdbreact';
import Orders from './Orders'
import { withRouter } from 'react-router-dom';
import data from '../data/dataBurger.json'

class Wall extends Component {
    constructor(props){
        super(props);
        this.state = {
            breakfast : false,
            dinner : false,
            extra : false,
            client: null,
            order : []
        }
    }

    handleChangeName(e){
        this.setState ({
            [e.target.name]: e.target.value.toUpperCase()
        })
        console.log(this.state)
    }

    handleChangeBreakfast(){
        this.setState ({breakfast: true})
        console.log(this.state)
    }

    handleChangeDinner(){
        this.setState ({breakfast: false, dinner: true})
    }

    onClick(e){
        e.preventDefault();
        const order = this.state.order
        order.push({producto : e.target.name,
                    precio : parseInt(e.target.value)})
        this.setState({ order : order })
    }
    handleChangeExtra(){
        this.setState({dinner: false, extra: true})
    }

    render() {
        let menu;
        let button;
        if(this.state.breakfast){
        menu =  data.breakfast.map((item, i) => {
        return (
          <Button key={i} color="green" className="mr-3 mb-3" name={item.nombre} value={item.precio} onClick={this.onClick.bind(this)}><Fa icon={item.icon} size="3x md" className="m-1"/><br/>{item.nombre}</Button>
        )
        })
        } else if (this.state.dinner){
            button = <Button className="rounded" size="lg" color="amber lighten-5" onClick={this.handleChangeExtra.bind(this)}>Extra</Button>

            menu = data.dinner.map((item, i) => {
                return (
                    <Button key={i} color="amber" className="mr-2 mb-3" name={item.nombre} value={item.precio} onClick={this.onClick.bind(this)}><Fa icon={item.icon} size="3x md" className="m-1"/><br/>{item.nombre}</Button>
                )
            })
        } else if (this.state.extra){
            menu = data.extra.map((item, i) => {
                return (
                    <Button key={i} color="amber lighten-5" className="mr-5 mb-3" name={item.nombre} value={item.precio} onClick={this.onClick.bind(this)}><Fa icon={item.icon} size="3x lg" className="m-1"/><br/>{item.nombre}</Button>
                )
            })
        }

        
        return (
            <div>
            <NavbarApp />
            <section className="container mt-4">
            <Button className="mr-4 rounded" size="lg" color="lime darken-4" onClick={this.handleChangeBreakfast.bind(this)}>Desayunos</Button>
            <Button className="rounded" size="lg" color="orange darken-4" onClick={this.handleChangeDinner.bind(this)}>Comida</Button>
            {button}
            <Input className="col-8 mt-3" label="Nombre Cliente" name="client" onChange={this.handleChangeName.bind(this)} />

            <section className="mt-4">
            {menu}   
            </section>
            </section>
            <Orders order={this.state.order}/>
            </div>
        )
    }
}


export default withRouter(Wall);