import React from 'react';
import { useEffect } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';
import { changeSelected } from '../store/categories';
import { getItems } from '../store/products';


function Categories(props) {

    useEffect(() => {
        props.changeSelected("Electronics");
    }, [])

    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" style={{ marginLeft: '42%', marginTop: '1%', fontSize: '25px' }}>
                {props.categories.map(element => {

                    return <Link color="inherit" onClick={() => { props.changeSelected(element.name) }}>
                        {element.name}
                    </Link>
                })}
            </Breadcrumbs>
            <div style={{ fontSize: '50px', marginTop: '3%', textAlign:'center' }}>{props.activeCategory.name}</div>
            <div style={{ fontSize: '25px', marginTop: '2%', color: 'GrayText', textAlign:'center' }}>{props.activeCategory.description}</div>
        </>
    )
}

const mapStateToProps = (state) => {
    return state.categories;
}

const mapDispatchToProps = {
    changeSelected,
    getItems
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);