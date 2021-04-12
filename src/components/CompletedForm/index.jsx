import { useRecoilState, useRecoilValue } from 'recoil';
import { submittedFormState } from '../../states/atoms';
import './progressIndicator.scss'
import {currentPageState} from '../../states/atoms'; 

const CompletedForm = () => {

    const submittedFormData = useRecoilValue(submittedFormState);
    const [currentPage, setCurrentPage] = useRecoilState(currentPageState)

    return (
        <div id="progressIndicator" style={{'display': currentPage === 'completed' ? 'initial' : 'none'}}>
            Congradualations, <span id="username">{submittedFormData.firstName}</span>! Your account has been created. 
            Please click <button onClick={()=>setCurrentPage('login')}>here</button> to login.
        </div>
    )
}

export default CompletedForm;