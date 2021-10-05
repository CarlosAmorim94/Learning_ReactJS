import * as C from './styles';
import { useState } from 'react';
import { Item } from '../../types/Item';

type Props = {
    item: Item
};

export const ListItem = ({item}:Props) => {

    const [isChecked, setIschecked] = useState(item.done);

    return (
        <C.Container done={isChecked}>
            <input type="checkbox" checked={isChecked} onChange={e => setIschecked(e.target.checked)}></input>
            <label>{item.name}</label>
        </C.Container>
    );
};