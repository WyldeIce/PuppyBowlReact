import {Link} from 'react-router-dom'

const AllPuppies = ({puppies}) => {
    return (
        <div>
            <h1>Puppy Bowl Players</h1>
            <h3>
                <Link to='/puppies/newpuppy'>
                    Add a new puppy here!
                </Link>
            </h3>
            <ul>
                {
                    puppies.map((puppy) => {
                        return (
                            <li key={puppy.id}>
                                <Link to={`/puppies/${puppy.id}`}>
                                    {puppy.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AllPuppies