import QCard from './Qcard';
import styles from './page5.module.css'
import Footer from '../../components/footer/footer';
import { questions } from './questions';

function Page5(){
  return(
    <div>
      <div className={styles.main}>  
        <h1>Conclusion</h1>
        {questions.map (ques => (<QCard 
        num={ques.num} 
        question={ques.question}
        answer={ques.answer}
        />) )}
      </div>
      <Footer />
    </div>
  );
}

export default Page5;
