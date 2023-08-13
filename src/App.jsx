import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const menu =[
    {id:1,product:'珍珠奶茶',desc:'香濃奶茶搭配QQ珍珠',price:50,stock:20},
    {id:2,product:'冬瓜檸檬',desc:'清新冬瓜配上新鮮檸檬',price:45,stock:15},
    {id:3,product:'翡翠檸檬',desc:'綠茶與檸檬的完美結合',price:55,stock:30},
    {id:4,product:'四季春茶',desc:'香醇四季春茶，回甘無比	',price:45,stock:10},
    {id:5,product:'阿薩姆奶茶',desc:'阿薩姆紅茶搭配香醇鮮奶',price:50,stock:25},
    {id:6,product:'檸檬冰茶',desc:'檸檬與冰茶的清新組合',price:45,stock:20},
    {id:7,product:'芒果綠茶',desc:'芒果與綠茶的獨特風味',price:55,stock:18},
    {id:8,product:'抹茶拿鐵',desc:'抹茶與鮮奶的絕配',price:60,stock:20},
  ]

  const [product, setProduct] = useState(menu);
  
  const minus = (i)=>{
    const newMenu = product.map((newItem)=>{
      if(newItem.id===i.id){
        newItem.stock = newItem.stock - 1
      }
      return newItem
    })
    setProduct(newMenu)
  }

  const add =(i)=>{
    const newMenu  = product.map((newItem)=>{
      if(newItem.id===i.id){
        newItem.stock = newItem.stock + 1
      }
      return newItem
    })
    setProduct(newMenu)
  }
  
  return (
    <>
      <h1> React Vite HW1</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col">價格</th>
            <th scope="col">庫存</th>
          </tr>
        </thead>
        <tbody> {product.map((i)=>{
          return(
            <tr key={i.id}>
              <td>{i.i}</td>
              <td><small>{i.desc}</small></td>
              <td>{i.price}</td>
              <td><button onClick={()=>{ minus(i)}}>-</button>{i.stock}<button onClick={()=>{add(i)}}>+</button></td>
            </tr>
          )
          })}
          
        </tbody>
      </table>
    </>
  )
}

export default App
