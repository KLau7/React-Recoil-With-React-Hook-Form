import {useRecoilState} from 'recoil';

import {AtomFamilyButton, ContextButton} from './SiteSettingsButton';
import TeamNews from './teamNews';
import GeneralNews from './generalNews';

import {currentPageState, siteSettingsKeys } from '../../states/atoms';
import { useRef } from 'react';

// import {SiteSettingsProvider} from '../../states/context';
// import Provider from './Provider'

const ContextShowcase = () => {

    const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
    const [siteSettings, setSiteSettings] = useRecoilState(siteSettingsKeys);

    const inputRef = useRef(null);

    const addThemeHandler = () => {
        let temp = JSON.parse(JSON.stringify(siteSettings));
        temp.push(inputRef.current.value);
        inputRef.current.value = '';
        setSiteSettings(temp);
    }


    // Context API
    const contextSiteSettings = [
        {name: 'AAA', value: false},
        {name: 'AAB', value: true},
    ];

    return (
        <div id="contextShowcasePage" style={{display: currentPage === 'contextShowcasePage' ? 'initial' : 'none' }}>
            <h1>Context Showcase</h1>
            <TeamNews></TeamNews>
            <GeneralNews></GeneralNews>

            <h2>Using Atom Family</h2>
            <div className="siteSettingsContainer">
                <div className="siteSettingsInputContainer">
                    <input type="text" ref={inputRef} placeholder="Site Settings Key"/>
                    <button onClick={addThemeHandler}>Submit</button>
                </div>
                {siteSettings.map(item => (
                    <AtomFamilyButton themeId={item} key={item}></AtomFamilyButton>
                ))}
            </div>
            <h2>Using Context API</h2>

            <p>Under development</p>

            {/* <Provider value={contextSiteSettings}>
                <ContextButton></ContextButton>
            </Provider> */}

            {/* <SiteSettingsProvider value={contextSiteSettings}>
                <Provider value={contextSiteSettings}>

                </Provider>
                <div className="siteSettingsContainer">
                    <div className="siteSettingsInputContainer">
                        <input type="text" ref={inputRef} placeholder="Site Settings Key"/>
                        <button onClick={addThemeHandler}>Submit</button>
                    </div>
                    <ContextButton></ContextButton>
                </div>
            </SiteSettingsProvider> */}
            <button onClick={() => {setCurrentPage('login')}}>Log out</button>
        </div>
    )
}

export default ContextShowcase;