async function DocsHome({ params }) {
    const { slug } = await params;
    if (slug?.length === 2) {
        return (
            <h1>Docs Home page with features: {slug[0]} and concept : {slug[1]}</h1>
        );
    } else if (slug?.length === 1) {
        return (
            <h1>docs home page with features : {slug[0]}</h1>
        );
    }
    return (
        <h1>Docs Home page</h1>
    );
}

export default DocsHome