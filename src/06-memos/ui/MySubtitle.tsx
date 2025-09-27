import { memo } from 'react';

interface Props {
    subtitle: string;
    // callMyApi: (myValue: string) => void;
    callMyApi: () => void;
}
export const MySubtitle = memo(({ subtitle, callMyApi }: Props) => {
    console.log('MySubtitle re-render');

    return (
        <>
            <h6 className="text-2xl font-bold">{subtitle}</h6>

            <button
                className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
                // onClick={() => callMyApi(subtitle)}
                onClick={callMyApi}
            >
                Llamar función
            </button>
        </>
    );
});
