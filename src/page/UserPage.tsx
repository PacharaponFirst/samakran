import { FC } from 'react';

interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company{
    name: string;
    catchPhrase: string;
    bs: string;
}


interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address
    phone: string;
    website: string;
    company: Company;
}

const UserPage: FC = () => {
    return(
    <>
    <h1>User Sawatdeekub</h1>
    <table>
        <thead>
            <tr>
                <th rowSpan={2}>Id</th>
                <th rowSpan={2}>Name</th>
                <th rowSpan={2}>User Name</th>
                <th rowSpan={2}>Email</th>
                <th colSpan={5}>Address</th>
                <th rowSpan={2}>Phone</th>
                <th rowSpan={2}>Website</th>
                <th colSpan={3}>Company</th>
            </tr>
            <tr>
                <th>Street</th>
                <th>Suite</th>
                <th>City</th>
                <th>Zipcode</th>
                <th>Geo</th>
                <th>Name</th>
                <th>Catchpharse</th>
                <th>Bs</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>001</td>
                <td>Jame</td>
                <td>a@g.com</td>
                <td>153/2</td>
                <td>024-981-255</td>
                <td>1.com</td>
                <td>123/456</td>
                <td>xxxx</td>
                <td>BKK</td>
                <td>123456</td>
                <td>80, 100</td>
                <td>Google</td>
                <td>GH</td>
                <td>189000</td>
            </tr>
        </tbody>
    </table>
    </>
    );
};

export { UserPage };