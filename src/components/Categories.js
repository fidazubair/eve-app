import React from 'react'
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import Divider from "@material-ui/core/Divider";
import {Link} from 'react-scroll'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox';
export default class CategoryPage extends React.Component {
    state = {
        checked:[],
        anchorEl: null,
        itemList: [], 
        filter:false,
        filteredCategories:[],
        categories: [
            {
                id:1,
                cname: 'Drinks',
                foodItems: [
                    {name: 'Sprite', image: 'sprite.jpg',price:15, description:'Served cold with ice'},
                    {name: 'Coca Cola', image: 'cocacola.jpg',price:12 , description:'Served cold with ice'},
                    {name: 'Mountain Dew', image: 'mountaindew.jpg',price:12, description:'Served cold with ice'},
                    {name: 'Fanta', image: 'fanta.jpg',price:13, description:'Served cold with ice'}
                ]
            },
            {
                id:2,
                cname: 'Burger',
                foodItems: [
                    {
                        name: 'Chicken burger',
                        image: 'burger.jpg',
                        price: 32,
                        description: 'Yummy chicken burger with tomato,lettuce and cheese'
                    },
                    {
                        name: 'Beef burger',
                        image: 'beefburger.jpg',
                        price: 22,
                        description: 'Juicy Beef burger with cheese and tomatoes'
                    },
                    {
                        name: 'Double stack burger', 
                        image: 'stackburger.jpg', 
                        price: 44,
                        description: '2 stack beef burger served with drinks and coleslaw'
                    },
                    
                ]
            },
            {
                id:3,
                cname: 'Salad',
                foodItems: [
                    {
                        name: 'Green salad', 
                        image: 'greensalad.jpg',
                        price:12,
                        description: 'Healthy Salad with lettuce'},
                    {
                        name: 'Caesar Salad', 
                        image: 'caesarsalad.jpg',
                        price:10,
                        description: 'Salad with lettuce and mayonaise'},
                    {
                        name: 'Chicken Salad', 
                        image: 'chickensalad.jpg',
                        price:42,
                        description: 'Chicken salad with lettuce and ranch sauce'},
                    
                ]
            }],
        value:[0,100]

    }


    handleChecked = (value) => {
       // this.setState({checked: event.target.checked})
        let currentIndex = this.state.checked.indexOf(value);
        let newChecked=[...this.state.checked]
        
        if(currentIndex=== -1){
            newChecked.push(value)
        }
        else{
            newChecked.splice(currentIndex,1)
        }
        this.setState({checked:newChecked})
    };
    handleClose = () => {
        this.setState({anchorEl: null})
    };

    handleClick = (event) => {
        this.setState({anchorEl: event.currentTarget})
    }
    
    handleChange=(event,newValue)=>{
        this.setState({value:newValue})
        
    }
    filterCheckbox=()=>{
        this.setState({filter:true})
        let filterData=[]
        {this.state.categories.map((cat,i)=>{
            if(this.state.checked.includes(cat.id)){
                filterData.push(cat)
                
            }
        })}
        this.setState({filteredCategories:filterData})
        console.log('fillterdata',filterData)
    }
    render() {
        const open = Boolean(this.state.anchorEl);
        const id = open ? 'simple-popover' : undefined;
        console.log("ids of checked",this.state.checked)
        return (
            <div>
               
                    {this.state.categories.map((cat,i)=>{
                        return <div style={{display: 'flex'}}>
                            <div style={{marginTop: '0.75rem'}}>
                                {cat.cname}
                            </div>
                            <Checkbox
                                checked={this.state.checked.indexOf(cat.id) !== -1}
                                onChange={()=>this.handleChecked(cat.id)}
                                inputProps={{'aria-label': 'primary checkbox'}}
                            />
                        </div>;
                    })}

                <Button aria-describedby={id} variant="contained" color="primary"
                        onClick={this.filterCheckbox}>
                    Filter
                </Button>
                <Typography gutterBottom>
                    Price range
                </Typography>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '15rem',
                    marginLeft: '2rem'
                }}>
                    <Slider
                        value={this.state.value}
                        onChange={this.handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                      

                    />
                </div>

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


                        {this.state.categories.map((cat, i) => {
                            return <div>
                                <Link to={cat.cname.toLowerCase()} spy={true} smooth={true}>
                                    <div style={{padding: '5%'}}>{cat.cname}</div>
                                </Link>

                                <Divider/>
                            </div>
                        })}
                    </Popover>
                </div>
                {
                    this.state.filter? 
                        this.state.filteredCategories.map((u, i) => {
                        return <div style={{margin: '2rem'}} id={u.cname.toLowerCase()}>
                            <div style={{fontSize: 'xx-large'}}> {u.cname}</div>
                            <br/>
                            {u.foodItems.filter(
                                (val) => {
                                    if (val.price >= this.state.value[0] && val.price <= this.state.value[1]) {
                                        return val
                                    }
                                }
                            ).map((food, j) => {
                                return <div>
                                    <div style={{fontWeight: 'bold', marginBottom: '1rem'}}>
                                        {food.name}
                                    </div>

                                    <div style={{
                                        borderRadius: '2rem',
                                        backgroundImage: `url(/images/${food.image})`,
                                        width: '10rem',
                                        height: '11rem',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        borderWidth: '2px',
                                        borderColor: 'black'
                                    }}>
                                        <div style={{
                                            marginLeft: '2.5rem',
                                            backgroundColor: 'steelblue',
                                            width: '5rem',
                                            borderRadius: '1rem',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            display: 'flex'
                                        }}>
                                            {food.price} QR
                                        </div>
                                    </div>

                                    <div>
                                        {food.description}
                                    </div>
                                    <br/>
                                    <Divider/>
                                </div>

                            })}</div>;
                    }):this.state.categories.map((u, i) => {
                            return <div style={{margin: '2rem'}} id={u.cname.toLowerCase()}>
                                <div style={{fontSize: 'xx-large'}}> {u.cname}</div>
                                <br/>
                                {u.foodItems.filter(
                                    (val) => {
                                        if (val.price >= this.state.value[0] && val.price <= this.state.value[1]) {
                                            return val
                                        }
                                    }
                                ).map((food, j) => {
                                    return <div>
                                        <div style={{fontWeight: 'bold', marginBottom: '1rem'}}>
                                            {food.name}
                                        </div>

                                        <div style={{
                                            borderRadius: '2rem',
                                            backgroundImage: `url(/images/${food.image})`,
                                            width: '10rem',
                                            height: '11rem',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            borderWidth: '2px',
                                            borderColor: 'black'
                                        }}>
                                            <div style={{
                                                marginLeft: '2.5rem',
                                                backgroundColor: 'steelblue',
                                                width: '5rem',
                                                borderRadius: '1rem',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                display: 'flex'
                                            }}>
                                                {food.price} QR
                                            </div>
                                        </div>

                                        <div>
                                            {food.description}
                                        </div>
                                        <br/>
                                        <Divider/>
                                    </div>

                                })}</div>;
                        })
                }
            </div>
        );
    }
}