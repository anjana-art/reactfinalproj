import {useState} from 'react';
import Data from './Data';
import Card from './Card';
import Filter from './Filter';

export default function Productwithid(){
   const [item, setItems] = useState(Data);
   const productItems = [...new Set(Data.map((val) => val.catagory))]

   const filterItems = (cat) => {
    const newItems = Data.filter((newval) => newval.catagory === cat);
    setItems(newItems);
   }
    return(
        <div>
            <div>
                <Filter
                 productItems = {productItems} 
                 filterItems = {filterItems}      
                 setItems = {setItems}
                />
                <Card item={item}/>
            
            </div>

        </div>
    )
}