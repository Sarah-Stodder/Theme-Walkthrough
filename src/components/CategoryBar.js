import React, {useState} from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function CategoryBar() {
   const [actCat, setActCat]=useState({});
   const categories=[{id:1, name:'Sour'},{id:2,name:'Gummy'}, {id:3, name:'Chocolate'}] 

   const handleActCat = (cat) =>{
       if(actCat.id === cat.id){
           setActCat({})
       }else{
           setActCat(cat)
       }
   }

  return (
    <Stack direction="row" spacing={1}>

    {categories.map((cat)=>(
        cat.id === actCat.id?
        <Chip onClick={()=>{handleActCat(cat)}} key={cat.id} variant="contained" size="small" label={cat.name} color="primary" />
        :
        <Chip onClick={()=>{handleActCat(cat)}} key={cat.id} variant="outlined" size="small" label={cat.name} color="primary" />
    )
    )}


    </Stack>
  )
}

