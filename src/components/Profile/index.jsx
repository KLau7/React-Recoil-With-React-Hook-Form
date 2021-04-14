import { useRecoilState, useRecoilValue } from 'recoil';
import {currentPageState, currentUserProfile} from '../../states/atoms';

const UserProfile = () => {

    const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
    const profile = useRecoilValue(currentUserProfile);

    return (
        <div id="userProfilePage" style={{display: currentPage === 'profile' ? 'initial' : 'none' }}>
            <h1>Your Profile</h1>
            {profile && 
                <>
                    <p>{profile.firstName} {profile.lastName}</p>
                    <p>{profile.Email}</p>
                    <p>{profile.dropdown}</p>
                    <p>{profile.checkbox}</p>
                </>
            }
            <button onClick={() => {setCurrentPage('login')}}>Log out</button>
        </div>
    )
}

export default UserProfile;