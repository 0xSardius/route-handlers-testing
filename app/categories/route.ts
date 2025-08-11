export const dynamic = "force-static";

export async function GET() {

    const categories = [
        { id: 0, name: "All" },
        { id: 1, name: "Electronics" },
        { id: 2, name: "Clothing" },
        { id: 3, name: "Books" },
    ];

    return Response.json(categories);
}