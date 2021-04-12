import Form from "../Form";
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPageState, existingProfiles } from "../../states/atoms";

const Login = () => {
    const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
    const loginsCollectionsState = useRecoilValue(existingProfiles);

    const handleOnClick = () => {
        setCurrentPage('createAct')
    }

    console.log('loginsCollectionsState: ', loginsCollectionsState);

    return (
        <div id="login" style={{display: currentPage === 'login' ? 'initial' : 'none' }}>

            <h1>Select a profile to login:</h1>

            <label htmlFor="email">Email:</label>
            <select name="email" id="email">
                {loginsCollectionsState.length === 0 && <option>No logins, create an account instead</option>}
                {loginsCollectionsState && loginsCollectionsState.map((p)=>{
                    return <option value="email">{p.Email}</option>
                })}
            </select>

            <label htmlFor="pw">Password:</label>
            <select name="pw" id="pw">
                <input type="text"/>
            </select>

            <button>Login</button>
            
            <p>Don't already have an account? <button onClick={handleOnClick}>Create an account instead</button></p>

        </div>
    )
}

export default Login;