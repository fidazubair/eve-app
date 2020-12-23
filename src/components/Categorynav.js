import React from 'react'
import '../Navbar.css'
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import {Link} from "react-scroll";
import Divider from "@material-ui/core/Divider";

export default class Categorynavbar extends React.Component {
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

    componentDidMount() {
        let mainNavLinks = document.querySelectorAll("nav ul li a");
        let mainSections = document.querySelectorAll("main section");


        window.addEventListener("scroll", event => {
            let fromTop = window.scrollY;

            mainNavLinks.forEach(link => {
                let section = document.querySelector(link.hash);

                if (
                    section.offsetTop <= fromTop &&
                    section.offsetTop + section.offsetHeight > fromTop
                ) {
                    link.classList.add("current");
                } else {
                    link.classList.remove("current");
                }
            });
        });
    }


    render() {
        const open = Boolean(this.state.anchorEl);
        const id = open ? 'simple-popover' : undefined;
        return (<div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {/*<header>*/}
                    {/*    <h1>Website</h1>*/}
                    {/*</header>*/}
                    <nav style={{display: 'flex', flexDirection: 'row', position: 'fixed'}}>
                        
                        <ul style={{display: 'flex'}}>
                            {this.state.categories.map((cat,i)=>{
                               return <li>
                                   <a href={'#'+cat.cname.toLowerCase()}>{cat.cname}</a>
                               </li>
                            })}
                          

                        </ul>
                    </nav>

                   
                    {this.state.categories.map((cat,i)=>{
                      return <section id={cat.cname.toLowerCase()}>
                          <div style={{fontSize: 'xx-large'}}> {cat.cname}</div>
                          {cat.foodItems.map((food, j) => {
                              return <div>
                                  <div>
                                      {food.name}
                                  </div>
                                  <div style={{backgroundImage: `url(/images/${food.image})`,width:'5rem',height:'10rem',backgroundPosition:'center',backgroundSize:'contain',backgroundRepeat:'no-repeat'}}>
                                  </div>
                              </div>

                          })}
                      </section>
                    })}

                    {
                        this.state.categories.map((u, i) => {
                            return <div style={{margin: '2rem'}} id={u.cname.toLowerCase()}>
                              
                                </div>;
                        })
                    }
                
                </div>
              
            </div>
        )
    }
}