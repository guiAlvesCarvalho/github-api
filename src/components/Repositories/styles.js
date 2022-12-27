import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const WrapperTabs = styled( Tabs )`
    font-size: 16px;
    width: 50%;
`

export const WrapperTabList = styled( TabList )`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`
WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled( Tab )`
    border-radius: 16px;
    border: 1px solid #CCC;
    padding: 8px;
    user-select: none;
    cursor: pointer;
    z-index: 999;
    background-color: '#FFF';

    &:focus {
        outline: none;
    }

    &.is-selected {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;  
        border-bottom: 1px solid white;
    }
`
WrapperTabList.tabsRole = 'Tab';

export const WrapperTabPanel = styled( TabPanel )`
    padding: 8px;
    border: 1px solid '#CCC';
    box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
    display: none;
    margin-top: -5px;

    &.is-selected {
        display: block;
    }


`
WrapperTabList.tabsRole = 'TabPanel';