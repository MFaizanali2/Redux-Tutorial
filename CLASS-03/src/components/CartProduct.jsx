import { DeleteOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import { ProductTypes } from '../store/actions/ActionTypes';

const CartProduct = ({data}) => {
    const {id, image, title, price,} = data;
    const dispatch = useDispatch()
  return (
    <div>
      <Card
        key={id}
      >
        <div className='flex gap-2 relative'>
            <div>
                <img className="w-50 h-50 object-contain" alt="example" src={image}/>
            </div>
            <div>
                <p className='text-xl'>{title}</p>
                <p className='text-xl'>${price}</p>
            </div>
            <div>
                <DeleteOutlined onClick={()=>dispatch({type:ProductTypes.REMOVE_CART_PRODUCT, payload:{id:id}})} className='absolute bottom-0 text-3xl right-5 text-red-500 cursor-pointer'/>
            </div>
        </div>
      </Card>
    </div>
  )
}

export default CartProduct
