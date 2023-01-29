import styles from './page6.module.css';
import CreditsCard from './card';
import { Members, Refs } from './page6data'
import Footer from '../../components/footer/footer';


function Page6(){
  
  return(
    <div className={styles.main}>  
      <h1>Meet the Team!</h1>
      {Members.map (member => (<CreditsCard 
      name={member.name} 
      img={member.img}
      order={member.order}
      res={(member.res).map (x => <li>{"- " + x}</li>)}
      github={member.github}
        />) )}
      
      <div className={styles.ref}>
      <h3>References</h3>
      <ul>
        {Refs.map (ref => <li> {ref} </li>) }
      </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Page6;