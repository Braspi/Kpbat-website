import { generateSlides } from '$lib/utils/genarateSlides'

export async function load() {
    return {
        slides: generateSlides()
    }
}
