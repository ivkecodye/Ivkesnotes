import Form from "../components/Form"

function Register() {
    return (
        <div>
            <h2>Ivkesweng Notes</h2>
            <Form route="/api/user/register/" method="register" />
        </div>
    )
}

export default Register