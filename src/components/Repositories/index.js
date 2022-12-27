import React from 'react';
import * as C from './styles'

const Repositories = () => {
    return( <>
        <C.WrapperTabs
            selectedTabPanelClassName='is-selected'
            selectedTabClassName='is-selected'
        >
                <C.WrapperTabList>
                    <C.WrapperTab>Repositories</C.WrapperTab>
                    <C.WrapperTab>Stared</C.WrapperTab>
                </C.WrapperTabList>
                <C.WrapperTabPanel>Panel Repositories</C.WrapperTabPanel>
                <C.WrapperTabPanel>Panel Starred</C.WrapperTabPanel>
            
        </C.WrapperTabs>
    </>)
}

export default Repositories