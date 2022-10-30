import clientPromise from "../../lib/mongodb"

export default async function handler(req, res) {
    const client = await clientPromise
    const db = client.db("myapp")

    res.status(200).json({ msg: 'hello' })
}