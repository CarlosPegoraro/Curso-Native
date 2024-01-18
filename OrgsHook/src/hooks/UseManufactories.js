import { useState, useEffect } from 'react';

import { getManufactories } from '../services/loadingData';

export default function useManufactories() {
    const [title, setTitle] = useState('');
    const [list, setList] = useState({});

    useEffect(() => {
        const texts = getManufactories();
        setTitle(texts.title);
        setList(texts.list);
    }, [])

    return [title, list]
}