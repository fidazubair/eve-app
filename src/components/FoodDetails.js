import React, {Component} from "react";
import {createMuiTheme, responsiveFontSizes, MuiThemeProvider, Typography} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link} from 'react-router-dom'
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default class DetailFood extends Component {
    state = {
        list: []
    }
    addList = (data) => {
        let list = [...this.state.list]
        list.push(data)
        {
            console.log('LIST', list)
        }
        {
            console.log('data', data)
        }
        this.setState({list})

    }

    render() {
        const info = this.props.location.data
        console.log('statelist', this.state.list)
        return (
            <div style={{justifyContent: 'center'}}>

                <Link to={'/'}> <ArrowBackIosIcon onClick={() => this.props.history.goBack()}
                                                  fontSize={'large'}/>
                </Link>
                <div style={{justifyContent: 'center', textAlign: '-webkit-center'}}>
                    <img src={`/images/${info.imagename}`} height={'40%'} width={'90%'}/>
                </div>
                <br/>


                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <MuiThemeProvider theme={theme}>
                        <div style={{alignItems: 'center'}}>
                            <div style={{color: 'gray', fontSize: 15, marginLeft: '5%'}}>Name</div>
                            <div style={{marginLeft: '10%', fontSize: 20}}>
                                {info.dishes}<br/>
                            </div>

                            <div style={{color: 'gray', fontSize: 15, marginLeft: '5%'}}>Ingredients</div>
                            <div style={{marginLeft: '10%', fontSize: 20}}>
                                {info.ingredients}<br/>
                            </div>

                            <div style={{color: 'gray', fontSize: 15, marginLeft: '5%'}}>Description</div>
                            <div style={{marginLeft: '10%', fontSize: 20}}>
                                {info.description}<br/>
                            </div>

                            <div style={{color: 'gray', fontSize: 15, marginLeft: '5%'}}>Price</div>
                            <div style={{marginLeft: '10%', fontSize: 20}}>
                                {info.price}<br/>
                            </div>

                        </div>
                    </MuiThemeProvider>

                    <img src={`/images/${info.type}.png`} height={'5%'} width={'5%'} style={{marginRight: '5%'}}/>
                </div>
                {/*<button onClick={() => this.addList(info.dishes)}>Add the Item</button>*/}
    

            </div>
        );

    }
}
 
