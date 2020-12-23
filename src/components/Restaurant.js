import React, {Component} from "react";
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import '../App.css';
import '../Header.css'

export default class RestaurantHome extends Component {

    state = {
        header: 'header1',
        anchorEl: null,
        restaurants: [
            {
                name: 'mcdonalds',
                data: [
                    {
                        id: 1,
                        dishes: 'Chicken burger',
                        ingredients: 'Served with lettuce, tomatoes and cheese',
                        description: 'Freshed cooked burger with love',
                        price: 45,
                        imagename: 'burger.jpg',
                        type: 'nonveg',

                    },
                    {
                        id: 2,
                        dishes: 'French fries',
                        ingredients: 'Potato',
                        description: 'Deep fried potato french fries dusted with salt',
                        price: 56,
                        imagename: 'frenchfries.jpg',
                        type: 'nonveg'
                    },
                    {
                        id: 3,
                        dishes: 'Mcflurry',
                        ingredients: 'Milk',
                        description: 'Ice cold icecream with toppings',
                        price: 25,
                        imagename: 'mcflurry.jpg',
                        type: 'veg'
                    },
                    {
                        id: 4,
                        dishes: 'Nuggets',
                        ingredients: 'Chicken and egg',
                        description: 'Crispy nuggets served with sauce',
                        price: 16,
                        imagename: 'nuggets.jpg',
                        type: 'nonveg'
                    },
                    {
                        id: 1,
                        dishes: 'Chicken burger',
                        ingredients: 'Served with lettuce, tomatoes and cheese',
                        description: 'Freshed cooked burger with love',
                        price: 45,
                        imagename: 'burger.jpg',
                        type: 'nonveg',

                    },
                    {
                        id: 2,
                        dishes: 'French fries',
                        ingredients: 'Potato',
                        description: 'Deep fried potato french fries dusted with salt',
                        price: 56,
                        imagename: 'frenchfries.jpg',
                        type: 'nonveg'
                    },
                    {
                        id: 3,
                        dishes: 'Mcflurry',
                        ingredients: 'Milk',
                        description: 'Ice cold icecream with toppings',
                        price: 25,
                        imagename: 'mcflurry.jpg',
                        type: 'veg'
                    },
                    {
                        id: 4,
                        dishes: 'Nuggets',
                        ingredients: 'Chicken and egg',
                        description: 'Crispy nuggets served with sauce',
                        price: 16,
                        imagename: 'nuggets.jpg',
                        type: 'nonveg'
                    },
                    {
                        id: 1,
                        dishes: 'Chicken burger',
                        ingredients: 'Served with lettuce, tomatoes and cheese',
                        description: 'Freshed cooked burger with love',
                        price: 45,
                        imagename: 'burger.jpg',
                        type: 'nonveg',

                    },
                    {
                        id: 2,
                        dishes: 'French fries',
                        ingredients: 'Potato',
                        description: 'Deep fried potato french fries dusted with salt',
                        price: 56,
                        imagename: 'frenchfries.jpg',
                        type: 'nonveg'
                    },
                    {
                        id: 3,
                        dishes: 'Mcflurry',
                        ingredients: 'Milk',
                        description: 'Ice cold icecream with toppings',
                        price: 25,
                        imagename: 'mcflurry.jpg',
                        type: 'veg'
                    },
                    {
                        id: 4,
                        dishes: 'Nuggets',
                        ingredients: 'Chicken and egg',
                        description: 'Crispy nuggets served with sauce',
                        price: 16,
                        imagename: 'nuggets.jpg',
                        type: 'nonveg'
                    }, {
                        id: 1,
                        dishes: 'Chicken burger',
                        ingredients: 'Served with lettuce, tomatoes and cheese',
                        description: 'Freshed cooked burger with love',
                        price: 45,
                        imagename: 'burger.jpg',
                        type: 'nonveg',

                    },
                    {
                        id: 2,
                        dishes: 'French fries',
                        ingredients: 'Potato',
                        description: 'Deep fried potato french fries dusted with salt',
                        price: 56,
                        imagename: 'frenchfries.jpg',
                        type: 'nonveg'
                    },
                    {
                        id: 3,
                        dishes: 'Mcflurry',
                        ingredients: 'Milk',
                        description: 'Ice cold icecream with toppings',
                        price: 25,
                        imagename: 'mcflurry.jpg',
                        type: 'veg'
                    },
                    {
                        id: 4,
                        dishes: 'Nuggets',
                        ingredients: 'Chicken and egg',
                        description: 'Crispy nuggets served with sauce',
                        price: 16,
                        imagename: 'nuggets.jpg',
                        type: 'nonveg'
                    }

                ]
            }
        ],
        searchTerm: ''
    }
    listenScrollEvent = event => {
        if (window.scrollY < 73) {
            return this.setState({header: 'header1'});

        } else if (window.scrollY > 210) {
            return this.setState({header: 'header2'});
        }
    };
    handleClose = () => {
        this.setState({anchorEl: null})
    };

    handleClick = (event) => {
        this.setState({anchorEl: event.currentTarget})
    }

    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);

        return () => window.removeEventListener("scroll", this.listenScrollEvent);
    }

    render() {
        const open = Boolean(this.state.anchorEl);
        const id = open ? 'simple-popover' : undefined;
        return (<div style={{margin: '2rem'}}>
            <div className={this.state.header} style={{display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}}>
                <input type={'text'} placeholder={'Search'}
                       onChange={(event) => this.setState({searchTerm: event.target.value})}/>
            </div>
            <div style={{marginTop:'8rem',minWidth:'10rem',minHeight:'10rem'}}>
                <img src="/images/mcdonalds.jpg" alt={'mcd'} height={'55%'} width={'90%'}/>
            </div>
            <br/>
            <div style={{

                position: 'fixed', //Here is the trick
                bottom: 2,
                marginLeft: '78%'
            }}>
                <Button aria-describedby={id} variant="contained" color="primary"
                        onClick={this.handleClick}>
                    Menu
                </Button>
            </div>

            <div>
                <Popover
                    style={{width: '66%'}}
                    // className={'MuiPaper-root'}
                    id={id}
                    open={open}
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}

                >

                    <div style={{padding: '5%'}} onClick={() => alert('helloo')}>Salad</div>
                    <Divider/>
                    <div style={{padding: '5%'}}>Beverages</div>
                    <Divider/>
                    <div style={{padding: '5%'}}>Desserts</div>
                </Popover>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', flexFlow: 'wrap', width: '99%'}}>
                {this.state.restaurants.map((u, i) => {
                    return u.data.filter((val) => {
                        if (this.state.searchTerm === '') {
                            return val
                        } else if (val.dishes.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((dish, j) => {
                        return (
                            <Link to={{pathname: '/FoodDetails', data: dish}} style={{textDecoration: 'none'}}>
                                <Card style={{
                                    height: '15rem',
                                    width: '15rem',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center', margin: '1rem',
                                    justifyContent: 'center'
                                }}>
                                    <img src={`/images/${dish.imagename}`} alt={""} style={{height: '40%', width: '35%'}}/>
                                    <CardContent style={{height: '65%', width: '50%'}}>

                                        <Typography variant="subtitle1" component="h4">
                                            {dish.dishes}
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary">
                                            Price: {dish.price}
                                        </Typography>

                                    </CardContent>


                                </Card>
                                <br/>


                            </Link>
                        );

                    })

                })}
            </div>

            <br/>


        </div>);

    }

}