import * as C from './carrinho'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default _ => {
    return (
        <C.Carrinho>
            <ShoppingCartIcon style={{fontSize: 40}}/>
            <span>Carrinho</span>
        </C.Carrinho>
    )
}