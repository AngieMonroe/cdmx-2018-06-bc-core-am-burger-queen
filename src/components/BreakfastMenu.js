import React,  { Component }  from 'react';
import NavbarApp from './NavbarApp';
import { Button, Fa } from 'mdbreact';
import Orders from './Orders'
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';

const firestore = firebase.firestore();        

class Wall extends Component {
    constructor(props){
        super(props);
        this.state = {
            breakfast : false,
            diner : false,
            breakfastMenu : [],
            order : []
        }
    }
    handleChangeBreakfast(){
        this.setState ({breakfast: true, diner: false})
    }

    handleChangeDiner(){
        this.setState ({breakfast: false, diner: true})
    }

    onClick(e){
        this.setState({[e.target.name] : e.target.value})
        console.log(this.state)
    }

    componentDidMount = () => {
        const breakfastMenu = []
        firestore.collection("breakfast").get().then(function(querySnapshot) {
            querySnapshot.forEach(doc => {
                const option = doc.data().option;
                breakfastMenu.push(option);
            });
        });
        this.setState({ breakfastMenu });
    }

    render(){
        let menu;
        this.state.breakfastMenu.map(item => {
            item.map(data => {
                console.log (data)
        
        if(this.state.breakfast){
        menu =
            <section className="mt-4">
             <Button color="green" className="mr-3 mb-3" name={data.nombre} value="5.00"><Fa icon="coffee" size="4x md" className="m-2"/><br/>Café americano</Button>
             <Button color="green" className="mr-3 mb-3" name="Café con Leche" value="7.00" onClick={this.onClick.bind(this)}><Fa icon="coffee" size="4x md" className="m-2"/><strong className="h2">M</strong><br/>Café con Leche</Button>
             <Button color="green" className="mr-3 mb-3" name="Sandwich" value="10.00" onClick={this.onClick.bind(this)}><Fa icon="cutlery" size="4x md" className="m-2"/><br/>Sandwich J y Q</Button>
             <Button color="green" className="mr-3 mb-3" name="Jugo Natural" value="7.00" onClick={this.onClick.bind(this)}><Fa icon="leaf" size="4x " className="m-2"/><br/>Jugo Natural</Button>
             </section>
        } else if (this.state.diner){
            menu = 
            <section className="mt-4">
             <Button color="amber" className="mr-2 mb-3" name="Hamburguesa Sencilla" value="10.00" onClick={this.onClick.bind(this)}><Fa icon="bars" size="3x md" className="m-1"/><br/>Hamburguesa<br/> Sencilla</Button>
             <Button color="amber" className="mr-2 mb-3" name="Hamburguesa Doble" value="15.00" onClick={this.onClick.bind(this)}><Fa icon="bars" size="3x md" className="m-1"/><strong className="h2">D</strong><br/>Hamburguesa<br/> Doble</Button>
             <Button color="amber" className="mr-2 mb-3" name="Papas fritas" value="5.00" onClick={this.onClick.bind(this)}><Fa icon="cog" size="3x md" className="m-1"/><br/>Papas<br/>fritas</Button>
             <Button color="amber" className="mr-2 mb-3" name="Onion Rings" value="5.00" onClick={this.onClick.bind(this)}><Fa icon="circle-o" size="3x md" className="m-1"/><br/>Onion<br/>Rings</Button>
             <Button color="amber" className="mr-2 mb-3" name="Agua chica" value="5.00" onClick={this.onClick.bind(this)}><Fa icon="minus-square-o" size="4x " className="m-2"/><br/>Agua Ch</Button>
             <Button color="amber" className="mr-2 mb-3" name="Agua grande" value="8.00" onClick={this.onClick.bind(this)}><Fa icon="square-o" size="4x " className="m-2"/><br/>Agua G</Button>
             <Button color="amber" className="mr-2 mb-3" name="Refresco chico" value="7.00" onClick={this.onClick.bind(this)}><Fa icon="minus-square" size="4x " className="m-2"/><br/>Refresco Ch</Button>
             <Button color="amber" className="mr-2 mb-3" name="Refresco grande" value="10.00" onClick={this.onClick.bind(this)}><Fa icon="square" size="4x " className="m-2"/><br/>Refresco G</Button>
             </section>
        } else {
            menu =
            <section className="mt-4">
            </section>  
}
})
})
        
        return (
            <div>
            <NavbarApp />
            <section className="container mt-4">
            <Button className="mr-4 rounded" size="lg" color="lime darken-4" onClick={this.handleChangeBreakfast.bind(this)}>Desayunos</Button>
            <Button className="rounded" size="lg" color="orange darken-4" onClick={this.handleChangeDiner.bind(this)}>Comida</Button> 
            {menu}   
            </section>
            <Orders order={this.state}/>
            </div>
        )
    }
}

