import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="fixed top-0 left-0 bg-cover bg-[url('/img/nbackground.webp')] h-full w-full flex justify-center align-middle">
            <div className="flex flex-row gap-2 p-4 w-full max-w-7xl max-h-1/2 m-[10%] justify-left bg-base-100 h-auto">
                <div className="flex flex-col gap-2 w-full p-8 justify-center">
                    <div className="flex flex-col gap-2 w-full text-center">
                        <h1 className="text-4xl font-bold">The Paradise Nursery</h1>
                        <p>Where green and healthy lives meet</p>
                    </div>
                        <Link className="btn btn-primary normal-case text-xl" to="/products">Get Started</Link>
                </div>
                <div className="flex flex-col gap-2 w-full p-10 justify-center">
                    <h1 className="text-4xl font-bold text-center">Our Mission</h1>
                    <div className="flex flex-col gap-2 w-full text-center text-lg">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum molestiae dolor perspiciatis perferendis? Porro, culpa. Debitis porro odit eveniet aut sequi odio illum tenetur!</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas rem odio labore nihil? Incidunt enim minima harum dolores omnis odio quisquam at rerum asperiores voluptatibus?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}