import {NavLink} from "react-router-dom"

function NavBar(){
    return(
        <nav className="Nav">
            <NavLink to="/">HOME</NavLink>
            <div className="one">
            <NavLink to="/search">SEARCH</NavLink>
            </div>
            <div className="two">
            <NavLink to="/form">FOOD FORM</NavLink>
            </div>
            <p>GET RECIPES HERE:</p>
            <div className="three">
            <NavLink to="/foodone">HEALTHY BANANA OATMEAL PANCAKES RECIPE</NavLink>
            </div>
            <div className="four">
            <NavLink to="/foodtwo">CAULIFLOWER FRIED RICE RECIPE</NavLink>
            </div>
            <div className="five">
            <NavLink to="/foodthree">SPAGHETTI SQUASH CACIO E PEPE RECIPE</NavLink>
            </div>
            <div className="six">
            <NavLink to="/foodfour">BAKED KALE CHIPS RECIPE</NavLink>
            </div>
            <div className="seven">
            <NavLink to="/foodfive">HEALTHY PEANUT BUTTER CUPS RECIPE</NavLink>
            </div>
            <div className="eight">
            <NavLink to="/foodsix">FROZEN YOGURT BARK RECIPE</NavLink>
            </div>
        </nav>
    )
}

export default NavBar