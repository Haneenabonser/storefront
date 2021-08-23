import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { getItems } from '../store/products';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        maxHeight: 400,

    },
    media: {
        height: 200,
    },
});

function Products(props) {
    const classes = useStyles();
    return (
        <>
            {props.activeProducts.map(element => {
                return <Card className={classes.root} style={{ display: 'inline-block', marginLeft: '25%', height: '5%', width: '40%', marginTop: '3%' }}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={element.image}
                            title={element.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {element.name} - ${element.price}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {element.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            })}

        </>
    )
}
function mapStateToProps(state) {
    return state.products;
}
const mapDispatchToProps = {
    getItems,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
