import React from 'react'

const Whatsappform = ({status}) => {
    
    return (
        <>
            <div className="jFYqfw" >
                <div className=" gzcIkF">
                    <button id="close-btn" aria-label="close-btn" onClick={()=>{status("false")}} className="sc-34daabe4-3 dWaxKu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke=" #015F74" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" >
                            </path>
                        </svg>
                    </button>
                    <div className="boVvJR">
                        <div src="https://images.wanderon.in/c_form.svg" className="sc-34daabe4-6 knlwBx">
                        </div>
                        <div src="https://images.wanderon.in/form.svg" className="sc-34daabe4-1 hgEiju">
                        </div>
                        <div>
                            <h2 className="iDMjwz">Where do you want to go next?</h2>
                            <div className=" hpfaQN">Make your move, fill out your details now!</div>
                        </div>
                    </div>
                    <div className="jYPSRL">
                        <div className="hXzXzG">
                            <form>
                                <div style={{maxHeight:"100px"}}>
                                    <div className="kpOaoh">
                                        <label className="fhucTq">Your Name *</label>
                                        <div style={{width:"100%",gap:"10px",position:"relative"}}>
                                            <div className="gUJNjz">
                                                <img alt="icon" src="images\icon\person-symbol.svg" decoding="async" data-nimg="fill" loading="lazy" style={{position:"absolute",height:"100%",width:'100%',left:'0',top:'0',right:'0',bottom:'0',color:"transparent"}} />
                                            </div>
                                            <input type="text" name="name" id="name" placeholder="Enter your name" className="sc-1697e5a4-3 eQRUfz" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{maxHeight:"100px"}}>
                                    <div className="kpOaoh">
                                        <label className=" fhucTq">Email Id *</label>
                                        <div style={{width:'100%',gap:'10px',position:"relative"}}>
                                            <div className="gUJNjz">
                                                <img alt="icon" src="images\icon\email-symbol.svg" decoding="async" data-nimg="fill" loading="lazy" style={{position:"absolute",height:"100%",width:'100%',left:'0',top:'0',right:'0',bottom:'0',color:"transparent"}}/>
                                            </div>
                                            <input type="email" name="email" id="email" placeholder="Enter your Email Id" className="eQRUfz" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{maxHeight:"100px"}}>
                                    <div className="kpOaoh">
                                        <label className="sc-1697e5a4-2 fhucTq">Phone *</label>
                                        <div style={{width:"100%",gap:"10px",position:"relative"}}>
                                            <div className="gUJNjz">
                                                <img alt="icon" src="images\icon\phone-symbol.svg" decoding="async" data-nimg="fill" loading="lazy" style={{position:"absolute",height:"100%",width:'100%',left:'0',top:'0',right:'0',bottom:'0',color:"transparent"}} />
                                            </div>
                                            <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Enter your 10 digit number" className="sc-1697e5a4-3 eQRUfz" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="cQCGKr">
                                    <label className="fhucTq">Message</label>
                                    <div className="liznBC">
                                        <img alt="msg" src="images\icon\message-symbol.svg" decoding="async" data-nimg="fill" loading="lazy" style={{position:"absolute",height:"100%",width:'100%',left:'0',top:'0',right:'0',bottom:'0',color:"transparent"}} />
                                    </div>
                                    <textarea placeholder="Write your message" name="message" className="sc-1697e5a4-4 kDqYLx">
                                    </textarea>
                                </div>
                                <button type="submit" className="fgWgyq">Submit</button>
                            </form>
                           
                        </div>
                    </div>
                </div>
              
            </div>
        </>
    )
}

export default Whatsappform
