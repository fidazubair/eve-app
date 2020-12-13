import React from 'react'

export default class Div extends React.Component{
    state = {
        color: 'white',
        elements :[{name:'one',age:45}, {name:'one',age:45}, {name:'one',age:45}],
        itemList:[]
    }

    listenScrollEvent = e => {
        if (window.scrollY > 400) {
            this.setState({color: 'black'})
        } else {
            this.setState({color: 'white'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
        this.dynamicDiv()
    }
    dynamicDiv=()=>{
        let items=[]
        for (const [index, value] of this.state.elements.entries()) {
           items.push(<li key={index}>{value.age}</li>)
        }
        this.setState({itemList:items})
    }
    

    render() {
        return(
            <div>
                {console.log('hbdhsfjhds',this.state.itemList)}
              
               {/*{this.state.itemList}*/}
                <div id="section_1" style={{height: '400px',
                    background: this.state.color,
                    padding: '30px'}}                   
                >
                    This is section 1
                </div>
                
                <div id="section_2" style={{height: '400px',
                    background: this.state.color,
                    padding: '30px',
                  }}>
                    This is section 2
                </div>
                
                <div id="section_3" style={{height: '400px',
                    background: this.state.color,
                    padding: '30px'}}>
                    This is section 3
                </div>
                
                <div id="section_4" style={{height: '400px',
                    background: this.state.color,
                    padding: '30px'}}>
                    This is section 4
                </div>
                
                <div id="section_5" style={{height: '400px',
                    background: this.state.color,
                    padding: '30px'}}>
                    This is section 5
                </div>

            </div>
        )
    }
}