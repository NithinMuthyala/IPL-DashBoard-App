import './index.css'

const MatchCard = props => {
  const {eachRecentM} = props
  console.log(eachRecentM)
  const {competingTeam, competingTeamlogo, result, matchStatus} = eachRecentM
  const status = matchStatus === 'Won' ? 'green-color' : 'red-color'
  return (
    <li className="list-card">
      <img
        src={competingTeamlogo}
        alt={`competing team ${competingTeam}`}
        className="oppTeamImage"
      />

      <p className="text">{competingTeam}</p>
      <p className="text">{result}</p>
      <p className={`text ${status}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
