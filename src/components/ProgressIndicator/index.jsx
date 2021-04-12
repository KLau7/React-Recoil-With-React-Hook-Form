import './progressIndicator.scss'

const ProgressIndicator = ({noFieldsCompleted}) => {
    return (
        <div id="progressIndicator">
            <p>
                You have completed: {noFieldsCompleted} (fields)
            </p>
            <p>
                You have {} fields left
            </p>
            
        </div>
    )
}

export default ProgressIndicator;