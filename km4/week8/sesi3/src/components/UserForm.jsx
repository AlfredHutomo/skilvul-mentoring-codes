import { useState } from "react"

const UserForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        const user = {
            username,
            email,
        }

        try {
            fetch("https://64400ae2b9e6d064be064168.mockapi.io/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="card">
            <h3>Create a user to mockApi</h3>
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserForm