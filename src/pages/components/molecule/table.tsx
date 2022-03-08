import Table from "Component/bp/Table";

const listData = [
    {id: '1', name: 'Apple Imac 27"', categoryId: '0', category: 'Desktop PC', price: '1999'},
    {id: '2', name: 'Apple MacBook Pro 17"', categoryId: '1', category: 'Laptop', price: '2999'},
    {id: '3', name: 'iPhone 13 Pro', categoryId: '2', category: 'Phone', price: '999'},
    {id: '4', name: 'Apple Magic Mouse 2', categoryId: '3', category: 'Accessories', price: '99.99'},
    {id: '5', name: 'Apple Watch Series 7', categoryId: '3', category: 'Accessories', price: '599'}
];

export default function TableTest(){
    const config = {
        id: 'table',
        colGroup: [
            {key: 'id', label: '', formatter: 'checkbox',
             onClick: ({checkbox, item, index}:any)=>console.log(checkbox.checked, item, index)
            },
            {key: 'name', label: 'Product Name', addClass: 'text-default font-medium cursor-pointer'},
            {key: 'category', label: 'Category',
             formatter: ({value, item}:any)=>{
                 const bgColor = item.categoryId>2 ? 'bg-default' : 'bg-success';
                 return <span className={`${bgColor} py-1 px-2 rounded text-white cursor-default`}>{value}</span>;
             }
            },
            {key: 'price', label: 'Price', formatter: 'number',
             addClass: ({item, value}:any)=>{
                  if(item.category==='Accessories'){
                      return 'font-bold';
                  }else if(value.replace('$','')>2000){
                      return 'text-warning';
                  }else {
                      return '';
                  }
             }
            }
        ],
        onClick: ({colIndex, item}:any)=>colIndex===1&&console.log(item)
    }
    
    return <>
        <Table {...config} data={listData}/>
    </>;
}