import React, { useState } from 'react'

const Faq = (props) => {
    const [active, update] = useState(false)
    return (
        <>
            <div className="grid w-full grid-cols-1 gap-4 mt-6 html-content">

                <div className="">
                    <header className="p-3 border bg-light border-accent cursor-pointer rounded-lg sm:text-lg font-semibold text-text flex items-center justify-between" onClick={()=>{update(!active)}} style={{borderBottomLeftRadius:active?"0px":"",borderBottomRightRadius:active?"0px":""}}>{props.question}<button className="leading-none text-text focus:outline-none"><i className="fa-solid fa-angle-down" style={{transform:active?"rotate(180deg)":""}}></i>
                    </button>
                    </header>
                    {
                        active ? <><article className="rounded-b-lg border-accent border border-t-0 p-2 sm:p-4 whitespace-pre-line text-text undefined"><div><p>{props.answar}.</p></div></article></> : <></>
                    }

                </div>
            </div>
        </>
    )
}

export default Faq
