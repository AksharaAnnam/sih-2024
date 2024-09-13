import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './SectionTwo.css'

const SectionTwo=()=>{
    return(
        <>
        <div class="row m-0 p-0">
            <h4 class="ps-4 pt-4 heading">Our Services</h4>
            <div class="col-sm-4 p-4">
                <div class="card my-card-one">
                    <div class="overtext align-items-center row m-0">
                        <p class="text-style m-0" align="center">Self appraisal forms for faculty</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 p-4">
                <div class="card my-card-two">
                    <div class="overtext align-items-center row m-0">
                        <p class="text-style m-0" align="center">Faculty performance analysis for administrator</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 p-4">
                <div class="card my-card-three">
                    <div class="overtext align-items-center row m-0">
                        <p class="text-style m-0" align="center">Allows faculty to log the events</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SectionTwo;