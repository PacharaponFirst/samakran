import { FC } from 'react';

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
            </tr>
            <tr>
                <th>Street</th>
                <th>Suite</th>
                <th>City</th>
                <th>Zipcode</th>
                <th>Geo</th>
            </tr>
        </thead>
    </table>
    </>
    );
};

export { UserPage };