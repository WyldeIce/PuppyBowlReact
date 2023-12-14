import {Link} from 'react-router-dom'
import {useState} from 'react'

const NewPuppy = ({create}) => {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [status, setStatus] = useState('bench')
    const [teamId, setTeamId] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        const createdPuppy = {
            name,
            breed,
            imageUrl,
            status,
            teamId,
            cohortId: 2310,
        }
        create(createdPuppy)
        setName('')
        setBreed('')
        setImageUrl('')
        setStatus('bench')
        setTeamId(0)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(event) => {setName(event.target.value)}} />
                </label>
                <br />
                <label>
                    Breed:
                    <input type="text" value={breed} onChange={(event) => {setBreed(event.target.value)}} />
                </label>
                <br />
                <label>
                    Image URL:
                    <input type="text" value={imageUrl} onChange={(event) => {setImageUrl(event.target.value)}} />
                </label>
                <br />
                <label>
                    Status:
                    <input type="text" value={status} onChange={(event) => {setStatus(event.target.value)}} />
                </label>
                <br />
                <label>
                    Team Id:
                    <input type="text" value={teamId} onChange={(event) => {setTeamId(event.target.value)}} />
                </label>
                <br />
                <button type="submit">Submit Puppy</button>
            </form>
            <br />
            <Link to='/puppies'>Back to all Puppies!</Link>
        </div>
    )

}

export default NewPuppy