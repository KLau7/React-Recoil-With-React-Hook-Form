import { useRecoilState, useRecoilValue } from 'recoil';
import { currentPageState, currentUser, existingProfiles } from "../../states/atoms";
import { useCallback, useEffect, useRef } from "react";
import { useForm } from 'react-hook-form';

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

    const [loginUser, setLoginUser] = useRecoilState(currentUser);
    const loginHandler = (data) => {
        setLoginUser(data.email);
        setCurrentPage('profile');
    }
    const { register, handleSubmit, watch, errors } = useForm();

    return (
        <div id="login" style={{display: currentPage === 'login' ? 'initial' : 'none' }}>

            <h1>Select a profile to login:</h1>

            <form onSubmit={handleSubmit(loginHandler)}>
                <label htmlFor="email">Email:</label>
                <select name="email" id="email" onChange={(e) => {emailChangeHandler(e.target.options.selectedIndex)}} ref={register()}>
                    {loginsCollectionsState.length === 0 && <option>No logins, create an account instead</option>}
                    {loginsCollectionsState && loginsCollectionsState.map((p)=>(
                        <option value={p.Email} key={p.Email}>{p.Email}</option>
                    ))}
                </select>

                <label htmlFor="pw">Password:</label>
                <input type="text" id="pw" ref={pwRef}/>

                <input type="submit" value="Login" />
            </form>
            
            <p>Don't already have an account? <button onClick={handleOnClick}>Create an account instead</button></p>

        </div>
    )
}

export default Login;