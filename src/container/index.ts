import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';


const MapStateToProps = (state:any) => {
    let { adminReducer } = state;
    let { items, addedCartProduct, selectedItem, allProducts } = adminReducer;
    return{
      initialText : "Hello",
      listProducts : items,
      addedCartProduct : addedCartProduct,
      selectedItem : selectedItem,
      allProducts : allProducts
    }
}

const MapDispatchToProps = (dispatch:any) => {
    return bindActionCreators ({
        ...Actions
    }, dispatch);
}

export default connect(MapStateToProps, MapDispatchToProps);