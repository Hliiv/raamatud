import { useState } from "react"

function UusOst({lisaToode}) {
    const [nimetus, setNimetus] = useState('')
    const [kogus, setKogus] = useState(1)
    const [yhik, setYhik] = useState('tk')
    const [hind, setHind] = useState('€')

    const lisa = () => {
        console.log(nimetus)
        console.log(kogus)
        console.log(yhik)
        console.log (hind)
        lisaToode(nimetus, kogus, yhik, hind)
        setNimetus('')
        setKogus(1)
        setYhik('tk')
        setHind ('€')
    }

    return (
        <div className="row">
            <input 
                className="col-4"
                placeholder="Toote nimetus"
                value={nimetus}
                onChange={(event) => setNimetus(event.target.value)}
            />
            <input 
                className="col-1"
                placeholder="Kogus"
                value={kogus}
                onChange={(event) => setKogus(event.target.value)}
            />
            <input 
                className="col-1"
                placeholder="Ühik"
                value={yhik}
                onChange={(event) => setYhik(event.target.value)}
            />

            <input 
                className="col-1"
                placeholder="Hind"
                value={hind}
                onChange={(event) => setHind(event.target.value)}
            />

            <button
                className="col-2"
                onClick={lisa}
            >Lisa </button>
        </div>
    )
}

export default UusOst