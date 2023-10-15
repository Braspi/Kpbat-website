export function generateGallery( length = 6, sig = 0 ): Array<{ src: string, alt: string }> {
    return Array.from( { length } ).map( ( _, index ) => {
        index = sig || index;
        return {
            src: `img/gallery/${ index+1 }.jpg`,
            alt: ``,
        };
    } );
}