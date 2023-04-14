import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  console.log(latestMatchDetails)
  const {
    competingTeam,
    competingTeamlogo,
    date,
    firstInnings,

    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-match-card-cont">
      <div className="logo-oppoteam-container">
        <div>
          <p className="para">{competingTeam}</p>
          <p className="para">{date}</p>
          <p className="para">{venue}</p>
          <p className="para">{result}</p>
        </div>
        <div>
          <img
            src={competingTeamlogo}
            alt={`latest match ${competingTeam}`}
            className="opplogo"
          />
        </div>
      </div>
      <div>
        <p className="para">First Innings</p>
        <p className="para">{firstInnings}</p>
        <p className="para">Second Innings</p>
        <p className="para">{secondInnings}</p>
        <p className="para">Man of The Match</p>
        <p className="para">{manOfTheMatch}</p>
        <p className="para">Umpires</p>
        <p className="para">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
