import { useState, useRef } from 'react';
import { ContextButton } from './SiteSettingsButton';
import { SingleContext } from './contextAPI/theme-context';

import './contextShowcase.scss';

const ContextAPIDemo = () => {

    const [theme, setTheme] = useState([]);

    const update = (idx, text) => {
        let _theme = [...theme];
        _theme[idx] = text;
        setTheme(_theme);
    }

    const inputRef = useRef(null);

    const addSiteSettings = () => {
        const _theme = [...theme];
        _theme.push(inputRef.current.value);
        inputRef.current.value = '';
        setTheme(_theme);
    }

    return (
        <div>
            <div className="siteSettingsInputContainer">
                <input type="text" ref={inputRef} placeholder="Site Settings Key"/>
                <button onClick={addSiteSettings}>Submit</button>
            </div>
            <SingleContext.Provider value={{theme, update}}>
                <h3>Same Provider</h3>
                <ContextButton></ContextButton>
            </SingleContext.Provider>
            <h3>Multiple Providers (Spoiler: not really possible)</h3>
            <div>
                <h4>Method 1 - Layering</h4>
                <h4>Method 2 - Parallel</h4>
            </div>
        </div>
    )
}

export default ContextAPIDemo;