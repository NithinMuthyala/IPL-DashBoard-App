import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {matchData: {}, isActive: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  convertSnakeCasetoCamel = matchdetails => ({
    competingTeam: matchdetails.competing_team,

    competingTeamlogo: matchdetails.competing_team_logo,
    date: matchdetails.date,
    firstInnings: matchdetails.first_innings,
    id: matchdetails.id,
    manOfTheMatch: matchdetails.man_of_the_match,
    matchStatus: matchdetails.match_status,
    result: matchdetails.result,
    secondInnings: matchdetails.second_innings,
    umpires: matchdetails.umpires,
    venue: matchdetails.venue,
  })

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.convertSnakeCasetoCamel(
        data.latest_match_details,
      ),
      recentMatches: data.recent_matches.map(eachmatch =>
        this.convertSnakeCasetoCamel(eachmatch),
      ),
    }
    this.setState({matchData: formattedData, isActive: false})
  }

  renderMatchDetails = () => {
    const {matchData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchData

    return (
      <div className="bg-team-match-container">
        <div className="img-cont">
          <img src={teamBannerUrl} alt="team banner" className="imgEle" />
        </div>
        <div className="latest-matches">
          <h1 className="latest-match-heading">Latest Matches</h1>

          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
        <ul className="recent-match-container">
          {recentMatches.map(eachRecentM => (
            <MatchCard key={eachRecentM.id} eachRecentM={eachRecentM} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isActive} = this.state
    console.log(isActive)
    return isActive ? (
      <div data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
        {/* <h1>Loading.........</h1> */}
      </div>
    ) : (
      this.renderMatchDetails()
    )
  }
}

export default TeamMatches
