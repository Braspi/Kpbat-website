export function generateSlides( length = 4, sig = 0 ): Array<{ src: string, alt: string }> {
    return Array.from( { length } ).map( ( _, index ) => {
        index = sig || index;

        return {
            src: `img/carousel/${ index+1 }.webp`,
            alt: ``,
        };
    } );
}