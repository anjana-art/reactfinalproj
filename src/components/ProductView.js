import React, {useState, useEffect} from 'react';
import  AppBar from './componentsforLanding/Appbar';

export function ProductView({item}){
  const [detail, setDetail] = useState([]);

  return (
    <div>

      <div className='detail-container'>
        <div className='detail-content'>
          {
            detail.map((val)=>
            {
              return(
                <>
                <div className='detail_info'>
                    <div className='img-box'>
                      <img  src={val.img} alt={val.name}/>
                      <h2>{val.price}</h2>
                      <h3>{val.feature}</h3>
                      <button>Add to Cart</button>
                    </div>
                </div>
                </>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

