export type TokenResponse = {
    refresh: string;
    access: string;
}
export type TokenResponseErrorEmptyCredentials = {
    username: string;
    password: string;
}
export type TokenResponseErrorEmptyUser = {
    username: string;
}
export type TokenResponseErrorEmptyPass = {
    password: string;
}
export type TokenResponseErrorInvalidCredentials = {
    detail: string;
}