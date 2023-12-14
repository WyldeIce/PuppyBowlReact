import {useState} from 'react'

const NavBar = ({puppies}) => {
    const [term, setTerm] = useState('')

    const filterTerm = puppies.filter((puppy) => {
        return puppy.name.indexOf(term) !== -1
    })

    return (
        <div>
            <label>
                <input type="text" value={term} onChange={(event) => {setTerm(event.target.value)}} />
            </label>
            {
                term.length > 0 ?
                <div>
                    <h3>Currently watching {filterTerm.length} of {puppies.length}</h3>
                    <ul>
                        {
                            term.map((puppy) => {
                                return <li key={puppy.id}>{puppy.name}</li>
                            })
                        }
                    </ul>
                </div>
                :null
            }
        </div>
    )
}

export default NavBar