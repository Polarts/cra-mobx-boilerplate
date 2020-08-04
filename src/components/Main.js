import React from 'react';
import {observer} from 'mobx-react';

export default observer(({mainStore}) => 
    <div>
        <h1>datas: {mainStore.datasCount}</h1>
        <ol>
            {mainStore.datas.map(daton => <li>{daton}</li>)}
        </ol>
        <button onClick={() => mainStore.addDaton("hewwo from daton "+(mainStore.datasCount+1))} >add daton</button>
    </div>
) 