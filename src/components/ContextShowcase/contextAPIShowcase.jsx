import { useState, useRef, useContext, useEffect } from 'react';
import { ContextButton } from './SiteSettingsButton';
import { SingleContext, ParentContext, ChildContext, SiblingAContext, SiblingBContext } from './contextAPI/contexts';

import './contextShowcase.scss';

import layerImage from '../../assets/images/contextAPI/layerProvider.png'
import parallelImage from '../../assets/images/contextAPI/parallelProvider.png'

const LayeredButtons = () => {
    
    const {parentString, updateParent} = useContext(ParentContext);
    const {childString, updateChild} = useContext(ChildContext);

    return (
        <>
            <button onClick={updateParent}>{parentString}</button>
            <button onClick={updateChild}>{childString}</button>
        </>
    )
}

const SiblingAButton = () => {
    const {siblingAString, updateSiblingA} = useContext(SiblingAContext);

    return(
        <button onClick={updateSiblingA}>{siblingAString}</button>
    )
}
const SiblingBButton = () => {
    const {siblingBString, updateSiblingB} = useContext(SiblingBContext);

    return(
        <button onClick={updateSiblingB}>{siblingBString}</button>
    )
}

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

    // Layered Context
    const [parentString, setParentString] = useState('hello world');
    const updateParent = () => {
        setParentString(parentString.split('').reverse().join(''));
    }
    const [childString, setChildString] = useState('lorem ipsum');
    const updateChild = () => {
        setChildString(childString.split('').reverse().join(''));
    }

    // Adjacent Context
    const [siblingAString, setSiblingAString] = useState('hello world');
    const updateSiblingA = () => {
        setSiblingAString(siblingAString.split('').reverse().join(''));
    }
    const [siblingBString, setSiblingBString] = useState('lorem ipsum');
    const updateSiblingB = () => {
        setSiblingBString(siblingBString.split('').reverse().join(''));
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
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <h4>Method 1 - Layering</h4>
                    <img src={layerImage}></img>
                    <ParentContext.Provider value={{parentString, updateParent}}>
                        <ChildContext.Provider value={{childString, updateChild}}>
                            <LayeredButtons></LayeredButtons>
                        </ChildContext.Provider>
                    </ParentContext.Provider>
                </div>
                <div>
                    <h4>Method 2 - Parallel</h4>
                    <img src={parallelImage}></img>
                    <SiblingAContext.Provider value={{siblingAString, updateSiblingA}}>
                        <SiblingAButton></SiblingAButton>
                    </SiblingAContext.Provider>
                    <SiblingBContext.Provider value={{siblingBString, updateSiblingB}}>
                        <SiblingBButton></SiblingBButton>
                    </SiblingBContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default ContextAPIDemo;