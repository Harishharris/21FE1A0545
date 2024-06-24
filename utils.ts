export let windowCurrState: number[] = []
export let windowPrevState: number[] = []

export function changeWindowCurrState(newState: number[]) {
    windowCurrState = newState
}

export function changeWindowprevState(newState: number[]) {
    windowPrevState = newState
}