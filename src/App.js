
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ListPromo from '../components/ListPromo';
import Header from '../components/Header';
import Listfood from '../components/Listfood';
import Inform from '../components/Inform';
import Navbar from '../components/Navbar';
import Bottom from '../components/Bottom';

export default function App() {
    
  
    return (
        <div>
            <div>
                <Header></Header>
            </div>  
           <div>
            <ListPromo></ListPromo>
           </div>
            <div>
                <Listfood></Listfood>
            </div>
            <div>
             <Inform></Inform>
            </div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Bottom></Bottom>
            </div>
        </div>
    )
}
