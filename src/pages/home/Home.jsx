import style from './home.module.css'
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import { useState } from "react";
import Infobar from "../../components/infobar/Infobar";

const Home = () =>
{
    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState([]);

    return (
        <div className={style.Home}>
            <div className={style.HomeBack}>

            </div>
            <div className={style.HomeContainer}>
                <Navbar />
                <List setOpen={setOpen} setInfo={setInfo} />
            </div>
            <Infobar isOpen={open} setOpen={setOpen} info={info} />
        </div>
    );
}

export default Home;