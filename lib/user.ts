import { User } from 'next-auth';

interface CustomUser extends User  {
    id: string,
    email: string,
    firstname: string,
    lastname: String,
    password: string
}

export default CustomUser;
