import { Cookie, Neonderthaw } from "next/font/google";

const neonderthaw = Neonderthaw({ subsets: ["latin"], weight: "400" })

const cookie = Cookie({ subsets: ['latin'], weight: '400' })

export default function HomePage() {
    return (
        <main className="">
            <div className="hero">
                <div className="action-wrapper">
                    <h1 className={"text-primary glow"} style={{ fontSize: "2.5rem" }}>Arizona Cactus Sales</h1>
                    <p className="text-light">ONLINE SHOP NOW LIVE!</p>
                    <button className="btn btn-primary">SHOP NOW!</button>
                </div>
            </div>
        </main>
    )
}
