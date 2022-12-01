export const capitalizeText = (str = '') => {
    return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
}

export const localDateStr = (date, format = {}, locale = 'es-EC') => {
    return new Date(date).toLocaleDateString(locale, format)
}

export const dayName = (date) => {
    return capitalizeText(
        localDateStr(date, { weekday: 'long' })
    )
}

export const monthName = (date) => {
    return capitalizeText(
        localDateStr(date, { month: 'long' })
    )
}

export const day = (date) => {
    const currentDay = new Date(date).getDate()
    return currentDay <= 9
        ? `0${currentDay}`
        : currentDay
}

export const year = (date) => {
    return new Date(date).getFullYear()
}