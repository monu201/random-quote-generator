import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

const arr=[{
    id:1,
    quote:"The purpose of our lives is to be happy",
    author:"Dalai Lama"
},
{
    id:2,
    quote:"Life is what happens when you’re busy making other plans",
    author:"John Lennon"
},
{
    id:3,
    quote:"Get busy living or get busy dying",
    author:"Stephen King"

},
{
    id:4,
    quote:"You only live once, but if you do it right, once is enough.",
    author:"Mae West"
},
{
    id:5,
    quote:"Curiosity about life in all of its aspects, I think, is still the secret of great creative people",
    author:" Leo Burnett"


},
{
    id:6,
    quote:"Turn your wounds into wisdom",
    author:"Oprah"


},
{
    id:7,
    quote:"You only live once, but if you do it right, once is enough.",
    author:"Mae West"


},{
    id:8,
    quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author:"Edison"


},{
    id:9,
    quote:"If you want to live a happy life, tie it to a goal, not to people or things.",
    author:"Albert Einstein"


},{
    id:10,
    quote:"Money and success don’t change people; they merely amplify what is already there",
    author:"Will Smith"

},
{
    id:11,
    quote:"Light is always shines brightest in the dark ",
    author:"Unknow"

}]

ReactDOM.render(<App quotes={arr} />, document.getElementById('root'));



