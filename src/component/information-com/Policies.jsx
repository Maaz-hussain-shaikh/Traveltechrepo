import React, { useState } from 'react'

const Policies = (props) => {
    const [output, update] = useState(false)
    return (
        <>
            <div class="grid w-full grid-cols-1 gap-4 mt-6 html-content">
                <div class="">
                    <header class="p-3 border bg-light border-accent cursor-pointer rounded-lg sm:text-lg font-semibold text-text flex items-center justify-between" onClick={() => { update(!output) }} style={{ borderBottomLeftRadius: output ? "0px" : "", borderBottomRightRadius: output ? "0px" : "" }}>{props.question}{props.name}<button class="leading-none text-text focus:outline-none" ><i class="fa-solid fa-angle-down" style={{ transform: output ? "rotate(180deg)" : "" }}></i>
                    </button>
                    </header>
                    {
                        output ? <>

                            <article class="rounded-b-lg border-accent border border-t-0 p-2 sm:p-4 whitespace-pre-line text-text undefined"><div><ul class="list-disc pl-8">

                                {props.terms.map((item, index) => {
                                    return (<>
                                        <li>{props.terms[index].description}</li>
                                        <p><br /></p>
                                    </>)
                                })}
                            </ul></div></article>
                        </> : <></>
                    }


                </div>
            </div>
        </>
    )
}

export default Policies
