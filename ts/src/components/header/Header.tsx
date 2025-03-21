import './Header.css'

export const Header =()=>{
    return(
        <div className="headerContainer">
           <img src='../../public/QuePicamosLogo.png' alt='logoHeader' className="logoHeader"/>
           <div className="cartItemContainer">
            <img src='../../public/shoppingCart.png' alt='logoCart' className='logoCart'/>
           <span className='quantityCart'>0</span>
           </div>
           
        </div>
    )
}