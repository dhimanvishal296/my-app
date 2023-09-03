function DessertsList(props) {
  // Implement the component here.
  const elements =  props.data.filter((item)=>{
    return item.calories < 500;
  })
  .sort((a , b)=>{
    return a.calories - b.calories;
  })
  .map((items) =>{
      // const data = items.name +" - "+ items.calories;
      const data = `${items.name} - ${items.calories} cal`;
   
      return <li> {data} </li>
  })

  return <ul style={{display:"inline-block"}}>{elements}</ul>; 
  
}

export default DessertsList;