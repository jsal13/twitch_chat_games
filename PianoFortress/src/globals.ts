// Works correctly
export { }

declare module 'vue' {
    interface ComponentCustomProperties {
        synth: (key: string) => any
    }
}