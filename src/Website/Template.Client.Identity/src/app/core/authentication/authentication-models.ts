export enum Role {
    Manager = 'Manager',
    Client = 'Client',
}

export interface IAuthenticatedUser {
    id?: number;
    username?: string;
    password?: string;
    role?: Role;
    token?: string;
    isAuthenticated: boolean;
}
