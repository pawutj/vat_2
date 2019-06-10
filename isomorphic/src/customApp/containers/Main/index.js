import React from 'react'
import LayoutContentWrapper from "../../../components/utility/layoutWrapper.js";
import LayoutContent from "../../../components/utility/layoutContent";
import Button, { ButtonGroup } from '../../../components/uielements/button';
import { Link } from 'react-router-dom'
const Main = () => {
    return(
        <LayoutContentWrapper>
            <LayoutContent>
                <div style = {setting}>
                    <h1>Welcome VRT Shop!</h1>
                    <div style = {{width:'400px',marginLeft:'auto',marginRight:'auto'}}>
                        <Link to= "/dashboard/setting">
                            <Button block>Setting up</Button><br></br>
                        </Link>
                        <Link to = "/dashboard/pp10">
                            <Button block>PP10 Application</Button><br></br>
                        </Link>
                        <Button block>Join Shop</Button>
                    </div>
                </div>
            </LayoutContent>
        </LayoutContentWrapper>

    )
}

const setting ={
    textAlign:'center',

}

export default Main