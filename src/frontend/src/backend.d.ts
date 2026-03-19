import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface backendInterface {
    getAddress(): Promise<string>;
    getBusinessHours(): Promise<string>;
    getClinicName(): Promise<string>;
    getPhone(): Promise<string>;
    getServices(): Promise<Array<string>>;
}
