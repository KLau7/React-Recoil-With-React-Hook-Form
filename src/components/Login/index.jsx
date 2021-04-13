import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPageState, existingProfiles } from "../../states/atoms";
import { useCallback, useEffect, useRef } from "react";

const Login = () => {
    const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
    const loginsCollectionsState = useRecoilValue(existingProfiles);

    const handleOnClick = () => {
        setCurrentPage('createAct')
    }

    const pwRef = useRef(null);
    const emailChangeHandler = useCallback((index) => {
        pwRef.current.value = loginsCollectionsState[index].password;
    }, [pwRef, loginsCollectionsState])
    useEffect(() => {
        if (loginsCollectionsState.length > 0) {
            emailChangeHandler(0);
        }
    }, [emailChangeHandler, loginsCollectionsState.length]);

    return (
        <div id="login" style={{display: currentPage === 'login' ? 'initial' : 'none' }}>

            <h1>Select a profile to login:</h1>

            <label htmlFor="email">Email:</label>
            <select name="email" id="email" onChange={(e) => {emailChangeHandler(e.target.options.selectedIndex)}}>
                {loginsCollectionsState.length === 0 && <option>No logins, create an account instead</option>}
                {loginsCollectionsState && loginsCollectionsState.map((p)=>(
                    <option value="email">{p.Email}</option>
                ))}
            </select>

            <label htmlFor="pw">Password:</label>
            <input type="text" id="pw" ref={pwRef}/>

            <button>Login</button>
            
            <p>Don't already have an account? <button onClick={handleOnClick}>Create an account instead</button></p>

        </div>
    )
}

export default Login;