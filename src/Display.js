import pic1 from './images/pic1.png'

function Display(){

    return(

            <>
                
                <div className="display-section">
    
                    <center>
                        <br></br><br></br><br></br>
                    <img src={pic1} width="80" height="120"/><br></br>
                    <p>A JavaScript library for building user interfaces</p><br></br><br></br>

                    <button>Get Started</button>

                     <a href="https://reactjs.org/tutorial/tutorial.html">Take the Tutorial</a>

                     <i class="chevron right icon"></i></center>

            </div>

        </>

    )

}

 

export default Display;