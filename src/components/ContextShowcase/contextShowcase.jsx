import {useRecoilState} from 'recoil';
import {currentPageState } from '../../states/atoms';

import AtomFamilyShowcase from './atomFamilyShowcase';
import ContextAPIDemo from './contextAPIShowcase';

const ContextShowcase = () => {
    const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

    return (
        <div id="contextShowcasePage" style={{display: currentPage === 'contextShowcasePage' ? 'initial' : 'none' }}>

            <h2>Using Context API</h2>
            <ContextAPIDemo></ContextAPIDemo>
            
            <h2>Using Atom Family</h2>
            <AtomFamilyShowcase />

            <button onClick={() => {setCurrentPage('login')}}>Log out</button>
        </div>
    )
}

export default ContextShowcase;