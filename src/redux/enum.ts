export enum STATUS {
    IDLE = "IDLE",
    LOADING = "LOADING",
    FAILED = "FAILED",
}

export type TStatus = STATUS.IDLE | STATUS.LOADING | STATUS.FAILED;