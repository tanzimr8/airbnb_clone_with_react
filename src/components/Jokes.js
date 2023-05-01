import Joke from './Joke';
import JokesData from './../jokesData'
const Jokes = ()=>{
    const jokesElement = JokesData.map((joke)=>{
        return <Joke key={joke.id}  setup={joke.setup} punchline ={joke.punchline} />
    });
    return(
    <>
        {jokesElement}
    </>
    );
}
export default Jokes;