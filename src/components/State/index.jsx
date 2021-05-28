import { Suspense } from 'react';
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { currentUserIDState, currentUserNameState, clickSum } from '../../states/atoms';
import ErrorBoundary from './ErrorBoundary';

const AsyncState = () => {
  // const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  // const profile = useRecoilValue(currentUserProfile);

  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<h1 style={{backgroundColor: "green", color: "white"}}>loading......</h1>}>
          <CurrentUserInfo />
          <CheckboxList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

// const CurrentUserInfo = () => {
//   const userNameLoadable = useRecoilValueLoadable(currentUserNameState);
//   console.log(userNameLoadable,'userNameLoadable')
//   switch (userNameLoadable.state) {
//     case "hasValue":
//       return <div>User name :{userNameLoadable.contents || "-"}</div>;
//     case "loading":
//       return <LoadingComp1 />;
//     case "hasError":
//       throw userNameLoadable.contents;
//     default:
//   }
// };

const CurrentUserInfo = () => {
  const userName = useRecoilValue(currentUserNameState);
  return <div>User name :{userName || '-'} </div>;
};


const LoadingComp1 = () => (
  <div className="container-of-loaders">
    <div className="loader-container no-7">
      <div className="loader seven" style={{backgroundColor: "red", color: "white"}}>Loading...</div>
    </div>
  </div>
);


const CheckboxList = () => {
  const [userID, setUserID] = useRecoilState(currentUserIDState);
  const [changeClick, setChangeClick] = useRecoilState(clickSum);

  const handleChangeUser = ({ target: { value } }) => {
    setChangeClick(changeClick + 1);
    setUserID(value);
  };

  return (
    <>
      <label htmlFor='Anson'>
        Anson
        <input
          type='radio'
          value='0'
          name='name'
          checked={userID == 0}
          onChange={handleChangeUser}
        />
      </label>

      <label htmlFor='Eddie'>
        Eddie
        <input
          type='radio'
          value='1'
          name='name'
          checked={userID == 1}
          onChange={handleChangeUser}
        />
      </label>

      <label htmlFor='Leon'>
        Leon
        <input
          type='radio'
          value='2'
          name='name'
          checked={userID == 2}
          onChange={handleChangeUser}
        />
      </label>
    </>
  );
};

const ErrorComp = () => {
  return <h2>Something went wrong.</h2>;
};

export default AsyncState;
