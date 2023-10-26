import { useContext } from 'react';

import GlobalContext from '../state/global-context';

export default function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}