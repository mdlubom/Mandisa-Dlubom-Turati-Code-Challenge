import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mandisa Dlubom Turati code challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>
            Mandisa <a href="https://www.turati.co.za/" target="_blank">Turati</a> code challenge
          </h1>
      </header>

      <main className={styles.main}>
        <div className={styles.grid.about}>
          <h2>Create a single page web application with the following:</h2>
          
          <ol>
            <li>A youtube integrated video in the centre of the page</li>
            <li>Under the video it a contact form with fields for
                <ul>
                  <li>Name</li>
                  <li>Email</li>
                  <li>Message (The contact form must send an email to yourself with the details of the contact form)</li>
                </ul>
            </li>
          </ol>
        </div>

        <div className={styles.grid}>
          <h2>Follow-up questions:</h2>
          
          <ol>
            <li>What did you accomplish:

                <ul>
                  <li>
                    I managed to create the single page web application with a youtube video and uploaded it to github <a href="https://github.com/mdlubom/Mandisa-Dlubom-Turati-Code-Challenge" target="_blank">Mandisa Turati Code Challenge</a>
                  </li>
                </ul>
            </li>
            <li>What did you learn:

              <ul>
                <li>
                  From this challenge I learnt that before jumping into a new project it is key to first take time to learn your required tools or frameworks. It is great to know how to translate design or project requirements in the planning phase but there is also a need to be understand of the language or tools that will be used to create a successful project.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <iframe className={styles.iframe} src="https://www.youtube.com/embed/LkSgxuQrYwY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

         <div className={styles.formWrapper}>
          <form action="#">
            <label for="fname">First name:</label>
            <input type="text" name="fname" placeholder="Your name"/><br/>
            <label for="lname">Last name:</label><br/>
            <input type="text" name="lname" placeholder="Your surname"/><br/><br/>
            <input type="submit" value="Submit"/>
          </form> 
        </div> 

      </main>

      <footer className={styles.footer}>
        <p>Mandisa Dlubom Turati code challenge</p>
      </footer>
    </div>
  )
}
