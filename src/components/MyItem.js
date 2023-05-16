import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import  Avatar  from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function MyItem() {
    const item={
        "id":2,
        "name":"Rainbow Sour Belts",
        "desc":"Yummy!",
        "price":12.99,
        "img":"https://cdn11.bigcommerce.com/s-wp1youxqtj/images/stencil/2048x2048/products/137/1614/Rainbow_Sour_Belts_RS1602-00-02__60760.1678114721.png?c=2",
        "category_id":1,
        "category_name":'Sour'
      }

  return (

      <Grid container spacing={1} sx={{m:1, pr:3, borderRadius:1, width:'50%',display:"flex", justifyContent: 'center', mx:"auto"}}>
        <Grid item sm={12} xs={12}  md={12}>
          <Item sx={{display:"flex", justifyContent: 'center'}}>
             <Avatar alt={item.img} src={item.img}sx={{height:'30%', width:'30%'}} variant="rounded"/>
          </Item>
        </Grid>
        <Grid item sm={12} xs={12}  md={12}>
          <Item sx={{height:'100%', alignContent: 'center'}}>
              <Typography variant="subtitle1"><strong>Item Name:</strong></Typography>
              <Typography variant="body1">{item.name}</Typography>
          </Item>
        </Grid>

        <Grid item sm={6} xs={6} md={6}>
          <Item sx={{height:'100%'}}>
            <Typography variant="subtitle1"><strong>Price:</strong></Typography>
            <Typography variant="body1">{item.price}</Typography>
          </Item>
        </Grid>
        <Grid item sm={6} xs={6} md={6}>
          <Item sx={{height:'100%'}}>
            <Typography variant="subtitle1"><strong>Item ID:</strong></Typography>
            <Typography variant="body1">{item.id}</Typography>
          </Item>
        </Grid>
        <Grid item sm={12} xs={12}  md={12}>
        <Item sx={{height:'100%'}}>
            <Typography variant="subtitle1"><strong>Description:</strong></Typography>
            <Typography variant="body1">{item.desc}</Typography>
          </Item>
        </Grid>
        <Grid item sm={12} xs={12}  md={12}>
        <Item sx={{height:'100%'}}>
            <Typography variant="subtitle1"><strong>Category:</strong></Typography>
            <Typography variant="body1">{item.category_name}</Typography>
          </Item>
        </Grid>

      </Grid>

  );
}