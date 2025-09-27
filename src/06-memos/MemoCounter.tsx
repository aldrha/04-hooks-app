import { useCounter } from '@/hooks/useCounter';
import { useMemo } from 'react';

const heavyStuff = (itectionNumber: number) => {
    console.time('heavy_stuff_started');

    for (let index = 0; index < itectionNumber; index++) {
        console.log('aqui vamos...');
    }

    console.timeEnd('heavy_stuff_started');

    return `${itectionNumber} iteraciones realizadas`;
};

export const MemoCounter = () => {
    const { counter, increment } = useCounter(40_000);
    const { counter: counter2, increment: increment2 } = useCounter(10);

    const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl text-white">Memo Counter - useMemo - {myHeavyValue}</h1>
            <hr />

            <h2 className="font-thin text-white">Counter: {counter}</h2>
            <h2 className="font-thin text-white">Counter2: {counter2}</h2>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={increment}>
                +1
            </button>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={increment2}>
                +1 - Counter 2
            </button>
        </div>
    );
};
