// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export  default function ProductCart({title, price, img ,quantity, inc,dec,ind, remove}){
    return(
        <>
        <div id="box">
            <div id="main">
            <img style={{width:"100px"}} src={img} alt="" />
            <div id="content">
                <h3>{title}</h3>
                <p>${price}</p>
                <button onClick={remove}>remove</button>
            </div>
            </div>
            
                <div id="key">
                    <button onClick={()=>inc(ind)}>+</button>
                    <p>{quantity}</p>
                    <button onClick={()=>dec(ind)}>-</button>
                </div>
           </div>
        </>
    )
}