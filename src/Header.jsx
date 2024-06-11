import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header({cartNumber}){

    return(
        <header>
            <div id="placeholder">
                <h2>UseReducer</h2>
            </div>
            <div id="cart">
                <h2><ShoppingCartIcon /><span>{cartNumber}</span></h2>
            </div>
        </header>
    )
}
export default Header;