import { use, type Usable } from 'react';
import type { User } from './api/get-user.action';

interface Props {
    getUser: Usable<User>;
}

export const ClientInformation = ({ getUser }: Props) => {
    const user = use(getUser);
    // const user = getUserAction(1)

    // useEffect(() => {
    //     getUserAction(id).then((user) => console.log(user));
    // }, [id]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h2 className="text-4xl text-white font-thin">
                {user.name} - {user.id}
            </h2>

            <p className="text-2xl text-white">{user.location}</p>
            <p className="text-xl text-white">{user.role}</p>
        </div>
    );
};
