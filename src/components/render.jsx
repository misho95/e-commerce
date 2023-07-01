import ItemCard from "./itemCard";

function Render( {data} ){
 
    return(
        <div className="mt-10 mb-10">
            <div className="flex flex-wrap gap-5 justify-center">
                {
                    data.map( (item) => {
                    return <ItemCard key={item.id} id={item.id} category={item.category} des={item.description} img={item.image} price={item.price} rating={item.rating} title={item.title}/>
                    })
                }
            
            </div>
        </div>
    )
}

export default Render;