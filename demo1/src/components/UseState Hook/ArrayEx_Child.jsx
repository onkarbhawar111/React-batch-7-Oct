export default function ArrayEx_Child({name, price, isAvailable}){
    return(
        <>
            <div>Name: {name}  Price: {price} {isAvailable == true ? '✔' : '❌'} </div>
        </>
    )
}