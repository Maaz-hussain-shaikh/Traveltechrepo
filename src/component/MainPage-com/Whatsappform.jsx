import React from 'react'

const Whatsappform = ({status}) => {
    
    return (
        <>
            <div class="jFYqfw" >
                <div class=" gzcIkF">
                    <button id="close-btn" aria-label="close-btn" onClick={()=>{status("false")}} class="sc-34daabe4-3 dWaxKu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke=" #015F74" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" >
                            </path>
                        </svg>
                    </button>
                    <div class="boVvJR">
                        <div src="https://images.wanderon.in/c_form.svg" class="sc-34daabe4-6 knlwBx">
                        </div>
                        <div src="https://images.wanderon.in/form.svg" class="sc-34daabe4-1 hgEiju">
                        </div>
                        <div>
                            <h2 class="iDMjwz">Where do you want to go next?</h2>
                            <div class=" hpfaQN">Make your move, fill out your details now!</div>
                        </div>
                    </div>
                    <div class="jYPSRL">
                        <div class="hXzXzG">
                            <form>
                                <div style={{maxHeight:"100px"}}>
                                    <div class="kpOaoh">
                                        <label class="fhucTq">Your Name *</label>
                                        <div style={{width:"100%",gap:"10px",position:"relative"}}>
                                            <div class="gUJNjz">
                                                <img alt="icon" src="images\icon\person-symbol.svg" decoding="async" data-nimg="fill" loading="lazy" style={{position:"absolute",height:"100%",width:'100%',left:'0',top:'0',right:'0',bottom:'0',color:"transparent"}} />
                                            </div>
                                            <input type="text" name="name" id="name" placeholder="Enter your name" class="sc-1697e5a4-3 eQRUfz" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{maxHeight:"100px"}}>
                                    <div class="kpOaoh">
                                        <label class=" fhucTq">Email Id *</label>
                                        <div style={{width:'100%',gap:'10px',position:"relative"}}>
                                            <div class="gUJNjz">
                                                <img alt="icon" src="images\icon\email-symbol.svg" decoding="async" data-nimg="fill" loading="lazy" style={{position:"absolute",height:"100%",width:'100%',left:'0',top:'0',right:'0',bottom:'0',color:"transparent"}}/>
                                            </div>
                                            <input type="email" name="email" id="email" placeholder="Enter your Email Id" class="eQRUfz" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{maxHeight:"100px"}}>
                                    <div class="kpOaoh">
                                        <label class="sc-1697e5a4-2 fhucTq">Phone *</label>
                                        <div style={{width:"100%",gap:"10px",position:"relative"}}>
                                            <div class="gUJNjz">
                                                <img alt="icon" src="images\icon\phone-symbol.svg" decoding="async" data-nimg="fill" loading="lazy" style={{position:"absolute",height:"100%",width:'100%',left:'0',top:'0',right:'0',bottom:'0',color:"transparent"}} />
                                            </div>
                                            <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Enter your 10 digit number" class="sc-1697e5a4-3 eQRUfz" value="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="cQCGKr">
                                    <label class="fhucTq">Message</label>
                                    <div class="liznBC">
                                        <img alt="msg" src="images\icon\message-symbol.svg" decoding="async" data-nimg="fill" loading="lazy" style={{position:"absolute",height:"100%",width:'100%',left:'0',top:'0',right:'0',bottom:'0',color:"transparent"}} />
                                    </div>
                                    <textarea placeholder="Write your message" name="message" class="sc-1697e5a4-4 kDqYLx">
                                    </textarea>
                                </div>
                                <button type="submit" class="fgWgyq">Submit</button>
                            </form>
                           
                        </div>
                    </div>
                </div>
              
            </div>
        </>
    )
}

export default Whatsappform
