export const FormatName = (id : string) => {
    if (!id) return ''
    if (id === 'bosnia') return 'Bosnia & Herz.'
    return id.charAt(0).toUpperCase() + id.slice(1)
}
