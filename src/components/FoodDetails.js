import React, {Component} from "react";
import {createMuiTheme, responsiveFontSizes, MuiThemeProvider, Typography} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link} from 'react-router-dom'
import {Tab, Tabs} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default class DetailFood extends Component {
    state = {
        list: [],
        value:0
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
    handleTabs=(event,value)=>{
        console.log(value)
        this.setState({value})
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

                <Tabs style={{backgroundColor: 'steelblue'}} onChange={this.handleTabs} value={this.state.value}>
                    <Tab label='Details'/>
                    <Tab label='Nutrition'/>

                </Tabs>
                <br/>
                {this.state.value === 0 ?
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
                    </div> : <div>
                        Some nutrition facts to be put here!
                    </div>}
                {/*<button onClick={() => this.addList(info.dishes)}>Add the Item</button>*/}


            </div>
        );

    }
}
 
