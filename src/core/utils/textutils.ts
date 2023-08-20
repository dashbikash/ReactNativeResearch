export const keyToHeader = (str: string): string => {
    str = str.split(/[\s_]+|(?=[A-Z])/).map(s => {
        return s.charAt(0).toUpperCase() + s.slice(1)
    }).join(" ")
    return str;
}
