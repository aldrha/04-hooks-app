export interface User {
    id: number;
    name: string;
    location: string;
    role: string;
}

export const getUserAction = async (id: number) => {
    console.log('Funcion llamada');

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Funcion resolvio');

    return {
        id: id,
        name: 'Aldrha Petit',
        location: 'La Victoria, Venezuela',
        role: 'Desarrollador Web',
    };
};
