import { useEffect, useRef } from "react"
import { CountUp } from "countup.js"

export default function NumberHelper({stats}:any){

    const numberef = useRef(null)

    useEffect(() =>{
        countupinit()
    })

    async function countupinit() {
        const count = new CountUp(numberef.current!!, stats.name, {
            enableScrollSpy : true,
            duration: 2.4
        })
        count.start()
    }

    return (
        <div id="statnums">
            <label><p ref={numberef}>{stats.name}</p><span>{stats.denominator}</span></label>
            <p>{stats.definition}</p>
        </div>
    )
}