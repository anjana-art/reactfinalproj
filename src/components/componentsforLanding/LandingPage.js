import { useState } from 'react';
import Data from './Data';
import Products from './Products';
import Filter from './Filter';
import Appbar from './Appbar';

export default function LandingPage({ addtocart }) {
    const [item, setItems] = useState(Data);
    const productItems = [...new Set(Data.map((val) => val.catagory))]

    const filterItems = (cat) => {
        const newItems = Data.filter((newval) => newval.catagory === cat);
        setItems(newItems);
    }
    return (
        <div>
            <div>
                <Appbar/>
                <Filter
                    productItems={productItems}
                    filterItems={filterItems}
                    setItems={setItems}
                />
                <Products item={item} addtocart={addtocart} />

            </div>

        </div>
    )
}