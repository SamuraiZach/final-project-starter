import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function counter(): JSX.Element{
    const [counterVal,setVal] = useState<number>(0);
    return(
        <span>
            <Button onClick={() => setVal(counterVal+1)}>Player Value = {counterVal}</Button>
        </span>
    );
}