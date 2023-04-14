import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeams} = props
  const {id, name, teamImageUrl} = eachTeams
  return (
    <li className="team-list">
      <Link to={`/team-matches/${id}`} className="link-item">
        <div className="image-team-name-container">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
