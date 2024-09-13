import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Logo from './Logo.png'
import './Footer.css'

const Footer=()=>{
    return(
        <>
        <div class="row m-0 p-0 section-last">
            <div class="col-sm-6 p-1 d-flex align-items-center">
                <img src={Logo} class='logo d-inline'></img>
                <div class="d-inline">
                    <p class="p-style m-0" ><i>Faculty 360</i></p>
                    <p class="p-sm-style m-0" >A platform for digital transformation</p>
                </div>
                {/* <div class="card my-card-one">
                    <div class="overtext align-items-center row m-0">
                        <p class="text-style m-0" align="center">Self appraisal forms for faculty</p>
                    </div>
                </div> */}
            </div>
        </div>
        </>
    )
}

export default Footer;