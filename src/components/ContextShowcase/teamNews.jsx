import { useRecoilState } from 'recoil';
import { teamState } from '../../states/atoms';

import './contextShowcase.scss'

const TeamNews = () => {

    const [team, setTeam] = useRecoilState(teamState);

    return (
        <div className={team}>
            <div className="teamNewsContainer">
                Team {team}
                <p>Some dynamic content</p>
                <button onClick={() => {setTeam(team === 'magma' ? 'aqua' : 'magma')}}>Change Team</button>
            </div>
        </div>
    )
}

export default TeamNews;