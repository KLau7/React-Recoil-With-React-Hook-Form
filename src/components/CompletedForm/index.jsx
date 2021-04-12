import { useRecoilValue } from 'recoil';
import { exampleAtom } from '../../states/atoms';
import './progressIndicator.scss'

const CompletedForm = ({submittedFormData}) => {

    const atom = useRecoilValue(exampleAtom);

    return (
        <div id="progressIndicator">
            TODO: Show completed form data
        </div>
    )
}

export default CompletedForm;