import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsList = await response.json()
    // console.log(teamsList)
    const formattedTeams = teamsList.teams.map(eachteam => ({
      name: eachteam.name,
      id: eachteam.id,
      teamImageUrl: eachteam.team_image_url,
    }))
    this.setState({teams: formattedTeams, isLoading: false})
  }

  renderHomePage = () => {
    const {teams} = this.state
    return (
      <div className="bg-home-container">
        <div className="logo-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="ul-container">
          {teams.map(eachTeams => (
            <TeamCard key={eachTeams.id} eachTeams={eachTeams} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    console.log(isLoading)
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      this.renderHomePage()
    )
  }
}

export default Home
