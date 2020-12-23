import React,{Component} from "react";
import {DragDropContext,Droppable,Draggable} from "react-beautiful-dnd";
import '../Admindrag.css'
import {v4} from "uuid";

export default class Admindrag extends Component {
    state={
        drag: [
            {
                id: v4(),
                cname: 'Burgers',
                items: [{
                    id: v4(),
                    name: "Chicken Burger"
                }]
            },
            {
                id: v4(),
                cname: 'Pasta',
                items: [{
                    id: v4(),
                    name: 'Lasagna'
                }]
            },
            {
                id: v4(),
                cname: 'Pizza',
                items: []

            },

        ],
        
    }
    handleDragEnd=({destination,source})=>{
     
        if(!destination){
            console.log('item Hekkiii',)
            return 
        }
        if(destination.index===source.index && destination.droppableId===source.droppableId){
            return
        }
         
         const itemCopy=this.state.drag.find(el=>el.id===source.droppableId).items[source.index]
        console.log('item copy',itemCopy)
          this.setState(prev=>{
              prev={...prev}
              console.log(prev)
              //Remoe from previous array
              prev.drag.find(el=>el.id===source.droppableId).items.splice(source.index,1)
              //Adding to a new items array
              prev.drag.find(el=>el.id===destination.droppableId).items.splice(destination.index,0,itemCopy)
              return prev
          })
    }
    render() {
        return (
            <div className={'App'}>
                <DragDropContext onDragEnd={this.handleDragEnd}>
                    {this.state.drag.map((data,key)=>{
                        return <div className={'column'}>
                           <h3> {data.cname}</h3> 
                            <Droppable droppableId={data.id}>
                                {(provided) => {
                                    return (
                                        <div ref={provided.innerRef}
                                             {...provided.droppableProps}
                                             className={'droppable-col'}>
                                            {data.items.map((el,index)=>{
                                                return (
                                                    <Draggable key={el.id} index={index} draggableId={el.id}>
                                                        {(provided) => {
                                                            return (
                                                                <div 
                                                                    className={'item'}
                                                                    ref={provided.innerRef}
                                                                     {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    >
                                                                    {el.name}

                                                                </div>);
                                                        }}
                                                    </Draggable>
                                                );
                                            })}
                                            {provided.placeholder}
                                        </div>
                                    )

                                }}
                            </Droppable>
                        </div>;
                          
                       
                    })}
                </DragDropContext>
            </div>
        );
    }
}
