import ClientList from './components/ClientList/ClientList'
import styles from './App.module.css'

function App() {
  return (
    <section className={styles.Container}>
      <div className={styles.Wrapper}>
        <div className={styles.Header}>
          <h1>Question</h1>
        </div>
        <div className={styles.Content}>
          <ClientList Name={'Pros'} />
          <span className={styles.Line}></span>
          <ClientList Name={'Cons'} />
        </div>
      </div>
    </section>
  );
}

export default App;
