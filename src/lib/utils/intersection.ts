let observer: IntersectionObserver;

function createObserver(callback: (entry: IntersectionObserverEntry) => void) {
    if (!observer) {
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                callback(entry);
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        });
    }
    return observer;
}

export function intersection(
    node: HTMLElement,
    params: { callback: (visible: boolean, entry: IntersectionObserverEntry) => void }
) {
    const observer = createObserver((entry) => {
        if (entry.target === node) {
            params.callback(entry.isIntersecting, entry);
        }
    });
    observer.observe(node);

    return {
        destroy() {
            observer.unobserve(node);
        }
    };
}
