import { useUser } from '../lib/hooks'
import Layout from '../components/layout'

const Home = () => {
  const user = useUser()
  const session = (user) => {
    if (!user) return null
    return (
      <>
        <p>Currently logged in as:</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </>
    )
  }

  return (
    <Layout>
      <h1>HDI Magic login</h1>

      <p>Steps to test this authentication example:</p>

      <ol>
        <li>Click Login and enter an email.</li>
        <li>
          You'll be redirected to Home. Click on Profile, notice how your
          session is being used through a token stored in a cookie.
        </li>
        <li>
          Click Logout and try to go to Profile again. You'll get redirected to
          Login.
        </li>
      </ol>
      <br></br>

      {session(user)}

      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </Layout>
  )
}

export default Home