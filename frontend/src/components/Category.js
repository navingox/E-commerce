import React ,{useEffect,useState}from 'react'
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    maxHeight:200,
  },
});

function Category() {
    const [categoryItems,setCategoryItems]=useState([])
        Axios.get('http://localhost:8000/category').then(res=>{
        setCategoryItems(res.data.data)
    })
            const classes = useStyles();
  return (
        <div className={classes.main}>
        {categoryItems.map(item=>(
             <div key={item.imageId}>
             <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={item.categoryName}
          height="140"
          image={item.productImagePath}
          title={item.categoryName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
             </div>
        ))}
        </div>
  );

}

export default Category;
