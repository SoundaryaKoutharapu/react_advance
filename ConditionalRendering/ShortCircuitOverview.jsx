import { useState, useEffect } from "react"


const ShortCircuitOverview = () => 
{
    const[falsy, setFalsy] = useState('');
    const[truthy, setTruthy] = useState('Atheena');

    const example = truthy && 'hima';

  return (
    <div>
        {/* {if {ShortCircuitOverview} {"won't work"}} */}
        <h3>Falsy: OR  - {falsy || 'hima'}</h3>
        <h3>Falsy: AND  - {falsy && 'hima'}</h3>
        <h3>Truthy: OR  - {truthy || 'hima'}</h3>
        <h3>Truthy: AND  - {truthy && 'hima'}</h3>
        {example}
    </div>
  )
}
export default ShortCircuitOverview