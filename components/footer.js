export default function Footer()
{
    return (
        <div>
            <h1>Footer page</h1>

            <div className="text-md text-green-700 justify-center mx-auto py-10">
                Copyright © {new Date().getFullYear()}{" "}
                <a href="#" className="text-red-500 hover:text-green-500 text-md px-10">
                    Blackbird
                </a>
            </div>

        </div>
    )
}
