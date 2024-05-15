import Form from "../components/Form"

function Login() {
    return (
        <div>
            <h2>Ivkesweng Notes</h2>
            <Form route="/api/token/" method="login" />
        </div>
    )
}
export default Login