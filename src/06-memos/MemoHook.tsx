import { useCallback, useState } from 'react';
import { MySubtitle } from './ui/MySubtitle';
import { MyTitle } from './ui/MyTitle';

// const handleCallMyApi = (myValue: string) => {
//     console.log('Llamar a la funcion -- API, ' + myValue);
// };

export const MemoHook = () => {
    const [title, setTitle] = useState('Hola');
    const [subTitle, setSubtitle] = useState('Mundo');

    const handleCallMyApi = useCallback(() => {
        // se usa el useCallback para memorizar funciones, para evitar que se re-renderice entre componentes
        console.log('Llamar a la funcion - API', subTitle);
    }, [subTitle]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">MemoHook</h1>

            <MyTitle title={title} />

            <MySubtitle subtitle={subTitle} callMyApi={handleCallMyApi} />

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setTitle('Hello, ' + new Date().getTime())}
            >
                Cambiar título
            </button>

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                // onClick={() => setSubtitle('World, ' + new Date().getTime())}
                onClick={() => setSubtitle('World')}
            >
                Cambiar subtítulo
            </button>
        </div>
    );
};
