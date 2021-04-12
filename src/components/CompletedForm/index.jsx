import { useRecoilValue } from 'recoil';
import { submittedFormState } from '../../states/atoms';
import './progressIndicator.scss'

const CompletedForm = () => {

    const submittedFormData = useRecoilValue(submittedFormState);
    // useEffect(()=>{
    //     return console.log(atom);
    // }, [atom])
    console.log(submittedFormData);

    return (
        <div id="progressIndicator">
            {submittedFormData.firstName}
        </div>
    )
}

export default CompletedForm;