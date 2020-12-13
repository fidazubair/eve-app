import React from 'react'
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import Divider from "@material-ui/core/Divider";
import {Link} from 'react-scroll'
export default class CategoryPage extends React.Component {
    state = {
        anchorEl: null,
        itemList: [],
        categories: [
            {
                cname: 'Drinks',
                foodItems: [
                    {name: 'Sprite', image: 'sprite.jpg'},
                    {name: 'Coca Cola', image: 'cocacola.jpg'},
                    {name: 'Mountain Dew', image: 'mountaindew.jpg'},
                    {name: 'Fanta', image: 'fanta.jpg'}
                ]
            },
            {
                cname: 'Burger',
                foodItems: [
                    {name: 'Chicken burger', image: 'burger.jpg'},
                    {name: 'Beef burger', image: 'beefburger.jpg'},
                    {name: 'Double stack burger', image: 'stackburger.jpg'},
                ]
            },
            {
                cname: 'Salad',
                foodItems: [
                    {name: 'Green salad', image: 'greensalad.jpg'},
                    {name: 'Caesar Salad', image: 'caesarsalad.jpg'},
                    {name: 'Chicken Salad', image: 'chickensalad.jpg'},
                ]
            }]

    }
    handleClose = () => {
        this.setState({anchorEl: null})
    };

    handleClick = (event) => {
        this.setState({anchorEl: event.currentTarget})
    }
    render() {
        const open = Boolean(this.state.anchorEl);
        const id = open ? 'simple-popover' : undefined;
        return (
            <div>
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

                        {/*<div style={{padding: '5%'}} onClick={() => alert('helloo')}>Salad</div>*/}
                        {/*<Divider/>*/}
                        {/*<div style={{padding: '5%'}}>Beverages</div>*/}
                        {/*<Divider/>*/}
                        {/*<div style={{padding: '5%'}}>Desserts</div>*/}
                        {this.state.categories.map((cat,i)=>{
                           return<div>
                               <Link  to={cat.cname.toLowerCase()} spy={true} smooth={true}> <div style={{padding: '5%'}}>{cat.cname}</div></Link>
                              
                               <Divider/>
                           </div> 
                        })}
                    </Popover>
                </div>
                {
                    this.state.categories.map((u, i) => {
                        return <div style={{margin: '2rem'}} id={u.cname.toLowerCase()}>
                            <div style={{fontSize: 'xx-large'}}> {u.cname}</div>
                            {u.foodItems.map((food, j) => {
                                return <div>
                                    <div>
                                        {food.name}
                                    </div>
                                    <div style={{backgroundImage: `url(/images/${food.image})`,width:'5rem',height:'10rem',backgroundPosition:'center',backgroundSize:'contain',backgroundRepeat:'no-repeat'}}> 
                                    </div>
                                </div>
 
                            })}</div>;
                    })
                }
            </div>
        )
    }
}