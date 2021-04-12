import { useRecoilValue } from 'recoil';
import { exampleAtom } from '../../states/atoms';
import './progressIndicator.scss'

const ProgressIndicator = ({noFieldsCompleted}) => {

    const atom = useRecoilValue(exampleAtom);

    return (
        <div id="progressIndicator">
            <p>
                You have completed: {noFieldsCompleted} (fields)
            </p>
            <p>
                You have {} fields left
            </p>
            <p>
                Sample Atom: {atom}
            </p>
            
        </div>
    )
}

export default ProgressIndicator;