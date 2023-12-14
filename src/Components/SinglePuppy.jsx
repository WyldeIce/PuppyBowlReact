import { Link, useParams } from 'react-router-dom'

const SinglePuppy = ({puppies, deletePuppy}) => {

    const params = useParams()
    const id = params.id*1

    const selectPuppy = puppies.find((puppy) => {
        return puppy.id === id
    })

    if(!selectPuppy) {
        return null
    } else {
        return (
            <div>
                <Link to='/puppies'>Back to all Puppies!</Link>
                <br />
                <h2>{selectPuppy.name}</h2>
                <h3>Breed: {selectPuppy.breed}</h3>
                <h3>Status: {selectPuppy.status}</h3>
                <h3>Team Id: {selectPuppy.teamId}</h3>
                <img src={selectPuppy.imageUrl} />
                <br />
                <button onClick={() => {deletePuppy(selectPuppy)}}>Retire Puppy</button>
            </div>
        )
    }

}

export default SinglePuppy