import spring from "../assets/spring.mp4"
import summer from "../assets/summer.mp4"
import autumn from "../assets/autumn.mp4"
import winter from "../assets/winter.mp4"

export function getSeason() {
    const month = new Date().getMonth() + 1

    if (month >= 3 && month <= 5) {
        return "spring"
    }

    if (month >= 6 && month <= 8) {
        return "summer"
    }

    if (month >= 9 && month <= 11) {
        return "autumn"
    }

    return "winter"
}

const seasonalViews = {
    spring,
    summer,
    autumn,
    winter
}

export const windowVideo = seasonalViews[getSeason()]