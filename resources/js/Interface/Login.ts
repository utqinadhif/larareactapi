export interface LoginResponse {
    data: {
        email: string,
        id: number,
        name: string
    },
    token: string
}
export interface UserResponse {
    created_at: string,
    email: string,
    email_verified_at: boolean,
    id: number,
    name: string,
    updated_at: string,
}
