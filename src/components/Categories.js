import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';
import { changeSelected } from '../store/categories';
import { getItems } from '../store/products';


function Categories(props) {

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" style={{marginLeft:'43%', fontSize:'25px'}}>
        {props.categories.map(element => {

          return <Link color="inherit" onClick={() => { props.changeSelected(element.name) }}>
            {element.name}
          </Link>
        })}
      </Breadcrumbs>
      <div  style={{marginLeft:'45%', fontSize:'50px', marginTop:'5%'}}>{props.activeCategory.name}</div>
      <div style={{marginLeft:'35%', fontSize:'25px', marginTop:'2%', color:'GrayText'}}>{props.activeCategory.description}</div>
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