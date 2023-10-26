
import React from 'react'


const Chips=(props)=>{
    console.log(props)
    const {chips, chip_len, list_len} = props
    const len = chips.length
    console.log(len)
    console.log(chip_len)

    return (
        <>
            {
                chips.slice(0, list_len).map((chip)=>{
                    return <div id={Math.random()}>
                        {chip.description.length > chip_len ? chip.description.slice(0, chip_len) + " ..." : chip.description}
                    </div>
                })
            }
            {
                <div>
                    Not shown {chips.slice(list_len).length}
                </div>
            }
        </>
    )
}

export default Chips